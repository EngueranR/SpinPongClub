import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { HomeButtonComponent } from './components/home-button/home-button.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPage } from './pages/login/login.page';
import { MenubarModule } from 'primeng/menubar';
import { RegisterPage } from './pages/register/register.page';
import { FormsModule } from '@angular/forms';
import { TournoiPage } from './pages/tournoi/tournoi.page';
import { EvenementPage } from './pages/evenement/evenement.page';
import { ClubPage } from './pages/club/club.page';
import { ContactPage } from './pages/contact/contact.page';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HomeButtonComponent,
    LoginPage,
    RegisterPage,
    TournoiPage,
    EvenementPage,
    ClubPage,
    ContactPage,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
