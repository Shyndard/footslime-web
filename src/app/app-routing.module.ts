import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './route/home/home.component';
import { RegistrationComponent } from './route/registration/registration.component';
import { RulesComponent } from './route/rules/rules.component';
import { TeamsComponent } from './route/teams/teams.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'register-teams', component: TeamsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
