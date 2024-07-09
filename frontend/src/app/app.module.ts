import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePage} from "./pages/home/home.page";
import { HomeButtonComponent } from './components/home-button/home-button.component';
import {CardModule} from "primeng/card";
import { ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './components/menu/menu.component';
import {MenubarModule} from "primeng/menubar";
import { AdministrationPage } from './pages/administration/administration/administration.page';
import {TabViewModule} from "primeng/tabview";
import { TournamentComponent } from './components/administration/tournament/tournament.component';
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrimeNGConfig} from "primeng/api";
import {PRIME_NG_LOCALE_FR} from "../../fr";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import { LoginPage } from './pages/user/login/login.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HomeButtonComponent,
    MenuComponent,
    AdministrationPage,
    TournamentComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabViewModule,
    CalendarModule,
    FloatLabelModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.setTranslation(PRIME_NG_LOCALE_FR)
  }
}
