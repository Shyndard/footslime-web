import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './route/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegistrationComponent } from './route/registration/registration.component';
import { RulesComponent } from './route/rules/rules.component';
import { FormsModule } from '@angular/forms';
import { TeamsComponent } from './route/teams/teams.component';
import { TeamRegistrationComponent } from './route/team-registration/team-registration.component';
import { PersonnalRegistrationComponent } from './route/personnal-registration/personnal-registration.component';
import { LiveComponent } from './route/live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    RulesComponent,
    TeamsComponent,
    TeamRegistrationComponent,
    PersonnalRegistrationComponent,
    LiveComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
