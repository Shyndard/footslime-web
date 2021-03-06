import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { RegistrationComponent } from './route/registration/registration.component';
import { RulesComponent } from './route/rules/rules.component';
import { TeamsComponent } from './route/teams/teams.component';
import { PersonnalRegistrationComponent } from './route/personnal-registration/personnal-registration.component';
import { TeamRegistrationComponent } from './route/team-registration/team-registration.component';
import { LiveComponent } from './route/live/live.component';
import { MatchsComponent } from './route/matchs/matchs.component';
import { MatchInProgressComponent } from './route/match-in-progress/match-in-progress.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/personnal', component: PersonnalRegistrationComponent },
  { path: 'registration/team', component: TeamRegistrationComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'registered', component: TeamsComponent },
  { path: 'live', component: LiveComponent },
  { path: 'matchs', component: MatchsComponent },
  { path: 'matchs/in-progress', component: MatchInProgressComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
