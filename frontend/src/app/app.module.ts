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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClubPage } from './pages/club/club.page';
import { ContactPage } from './pages/contact/contact.page';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { TournamentPage } from './pages/tournament/tournament.page';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AdministrationPage } from './pages/administration/administration.page';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { AdministrationTournamentsComponent } from './components/administration/administration-tournaments/administration-tournaments.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { AdministrationNewsComponent } from './components/administration/administration-news/administration-news.component';
import { AdministrationEventsComponent } from './components/administration/administration-events/administration-events.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { EvenementPage } from './pages/evenement/evenement.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HomeButtonComponent,
    LoginPage,
    RegisterPage,
    EvenementPage,
    ClubPage,
    ContactPage,
    NavBarComponent,
    TournamentPage,
    AdministrationPage,
    AdministrationTournamentsComponent,
    AdministrationNewsComponent,
    AdministrationEventsComponent,
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
    InputTextareaModule,
    InputNumberModule,
    DividerModule,
    ReactiveFormsModule,
    MenuModule,
    TabMenuModule,
    TabViewModule,
    TableModule,
    CalendarModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
