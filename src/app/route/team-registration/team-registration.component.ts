import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/service/team.service';
import { Team } from 'src/app/shared/entity/team';

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.scss'],
})
export class TeamRegistrationComponent {
  teamName: String;
  usersnames: String[];
  errorMessage: String;
  acceptRules: boolean;
  stage: String;

  regex: RegExp;

  private MIN_TEAM_SIZE = 3;
  private MAX_TEAM_SIZE = 5;

  constructor(private teamService: TeamService) {
    this.usersnames = new Array(this.MAX_TEAM_SIZE);
    this.regex = new RegExp('^[a-zA-Z0-9_]*$');
    const register = localStorage.getItem('register');
    if (register && register.length > 0) {
      this.stage = 'already-register';
    } else {
      this.stage = 'form';
    }
  }

  registerTeam() {
    if (this.teamName.length < 3 || this.teamName.length > 20) {
      this.errorMessage =
        "Veuillez saisir un nom d'équipe correct (de 3 à 20 charactères).";
    } else if (!this.haveFirstCount(this.usersnames, this.MIN_TEAM_SIZE)) {
      this.errorMessage =
        'Veuillez saisir les ' + this.MIN_TEAM_SIZE + ' premiers pseudos.';
    } else if (this.haveDuplicateKey(this.usersnames)) {
      this.errorMessage = 'Veuillez saisir des pseudos différents.';
    } else if (this.haveBadUsernames(this.usersnames, this.MIN_TEAM_SIZE)) {
      this.errorMessage =
        'Veuillez saisir des pseudos valides (taille ou format incorrect).';
    } else if (!this.acceptRules) {
      this.errorMessage = 'Veuillez accepter le réglement.';
    } else {
      this.errorMessage = '';
      this.stage = 'verification';
      this.createTeam(
        this.teamName,
        this.usersnames.filter((name) => name && name.length > 0)
      );
    }
  }

  private haveFirstCount(usernames: String[], indexLimit: number): boolean {
    for (let i = 0; i < indexLimit; i++) {
      if (!usernames[i]) {
        return false;
      }
    }
    return true;
  }

  private haveDuplicateKey(usernames: String[]): boolean {
    return (
      usernames.filter(
        (item) => item != '' && this.countInArray(usernames, item) > 1
      ).length > 1
    );
  }

  private haveBadUsernames(usernames: String[], indexLimit: number): boolean {
    for (let i = 0; i < indexLimit; i++) {
      if (
        usernames[i].length < 3 ||
        usernames[i].length > 16 ||
        !usernames[i].match(this.regex)
      ) {
        return true;
      }
    }
    return false;
  }

  private countInArray(array: String[], word: String): number {
    return array.filter(
      (item) => item.toLocaleLowerCase() === word.toLocaleLowerCase()
    ).length;
  }

  private createTeam(teamName: String, usernames: String[]) {
    this.teamService.createTeam(teamName, usernames).subscribe(
      (response: Team) => {
        this.stage = 'success';
        localStorage.setItem('register', new Date().getTime() + '');
      },
      (error: any) => {
        this.stage = 'fail';
        if (error.status === 0) {
          this.errorMessage =
            'API indisponible. Veuillez recommencer dans quelques minutes.';
        } else if (error.status === 409) {
          this.errorMessage =
            "Conflit détecté ! Vérifiez que le nom d'équipe est disponible.";
        } else {
          this.errorMessage =
            'Une erreur est survenue ( code ' +
            error.status +
            ') contactez un membre du staff.';
        }
      }
    );
  }

  isStage(value: String): boolean {
    return this.stage.toLowerCase() === value.toLocaleLowerCase();
  }
}
