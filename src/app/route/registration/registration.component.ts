import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/shared/service/team.service';
import { Team } from 'src/app/shared/entity/team';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  teamName: String;

  firstUser: String;
  secondUser: String;
  thirdUser: String;
  optionalUser: String;

  errorMessage: String;
  acceptRules: boolean;
  stage: String;

  constructor(private teamService: TeamService) {
    const register = localStorage.getItem('register');
    if (register) {
      this.stage = 'already-register';
    } else {
      this.stage = 'form';
    }
  }

  registerTeam() {
    if (
      this.firstUser === this.secondUser ||
      this.firstUser === this.thirdUser ||
      this.firstUser === this.optionalUser ||
      this.secondUser === this.thirdUser ||
      this.thirdUser === this.optionalUser
    ) {
      this.errorMessage = 'Veuillez saisir des pseudos différents';
    } else if (!this.acceptRules) {
      this.errorMessage = 'Veuillez accepter le réglement';
    } else {
      this.errorMessage = '';
      this.stage = 'verification';
      this.startVerification(this.teamName, [
        this.firstUser,
        this.secondUser,
        this.thirdUser,
        this.optionalUser,
      ]);
    }
  }

  private startVerification(teamName: String, usernames: String[]) {
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
            "Conflit détecté ! Vérifiez que le nom d'équipe est disponible";
        }
      }
    );
  }

  isStage(value: String): boolean {
    return this.stage.toLowerCase() === value.toLocaleLowerCase();
  }
}
