// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from "./pages/home/home.page";
import {AdministrationPage} from "./pages/administration/administration/administration.page";
import {LoginPage} from "./pages/user/login/login.page";

const routes: Routes = [
  { path: '', component: HomePage},
  { path:'login', component: LoginPage},
  { path:'admin', component: AdministrationPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
