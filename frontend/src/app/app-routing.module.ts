import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { EvenementPage } from './pages/evenement/evenement.page';
import { ClubPage } from './pages/club/club.page';
import { ContactPage } from './pages/contact/contact.page';
import {TournamentPage} from "./pages/tournament/tournament.page";
import {AdministrationPage} from "./pages/administration/administration.page";

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'tournoi', component: TournamentPage },
  { path: 'evenement', component: EvenementPage },
  { path: 'club', component: ClubPage },
  { path: 'contact', component: ContactPage },
  { path: 'admin', component: AdministrationPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
