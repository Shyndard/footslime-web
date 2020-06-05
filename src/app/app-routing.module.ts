import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { RegistrationComponent } from './route/registration/registration.component';
import { RulesComponent } from './route/rules/rules.component';
import { TeamsComponent } from './route/teams/teams.component';
import { PersonnalRegistrationComponent } from './route/personnal-registration/personnal-registration.component';
import { TeamRegistrationComponent } from './route/team-registration/team-registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/personnal', component: PersonnalRegistrationComponent },
  { path: 'registration/team', component: TeamRegistrationComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'registered', component: TeamsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
