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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    RulesComponent,
    TeamsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
