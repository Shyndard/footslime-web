import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/shared/entity/team';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/entity/user';

@Component({
  selector: 'app-personnal-registration',
  templateUrl: './personnal-registration.component.html',
  styleUrls: ['./personnal-registration.component.scss'],
})
export class PersonnalRegistrationComponent {
  username: String;
  errorMessage: String;
  acceptRules: boolean;
  stage: String;

  regex: RegExp;

  constructor(private userService: UserService) {
    this.regex = new RegExp('^[a-zA-Z0-9_]*$');
    const register = localStorage.getItem('register');
    if (register && register.length > 0) {
      this.stage = 'already-register';
    } else {
      this.stage = 'form';
    }
  }

  registerTeam() {
    if (this.haveBadUsernames(this.username)) {
      this.errorMessage =
        'Veuillez saisir un pseudo valide (taille ou format incorrect).';
    } else if (!this.acceptRules) {
      this.errorMessage = 'Veuillez accepter le réglement.';
    } else {
      this.errorMessage = '';
      this.stage = 'verification';
      this.createUser(this.username);
    }
  }

  private haveBadUsernames(username: String): boolean {
    return (
      username.length < 3 || username.length > 16 || !username.match(this.regex)
    );
  }

  private createUser(username: String) {
    this.userService.createUser(username).subscribe(
      (response: User) => {
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
            'Conflit détecté ! Il semble que vous soyez déjà inscrit.';
        }
      }
    );
  }

  isStage(value: String): boolean {
    return this.stage.toLowerCase() === value.toLocaleLowerCase();
  }
}
