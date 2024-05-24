import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { GridTileComponent } from './grid-tile/grid-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GridTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
