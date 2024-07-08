import { NgModule } from '@angular/core';
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
import {Ripple} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HomeButtonComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    Ripple
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
