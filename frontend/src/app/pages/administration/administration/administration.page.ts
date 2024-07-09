import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../../../components/menu/menu.component";
import {HomePage} from "../../home/home.page";
import {HomeButtonComponent} from "../../../components/home-button/home-button.component";
import {TournamentComponent} from "../../../components/administration/tournament/tournament.component";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss']
})
export class AdministrationPage implements OnInit {
  tabs?: { title: string, content: any}[];

  ngOnInit() {
    this.tabs = [
      { title: 'Tournois', content: TournamentComponent},
      { title: 'News', content: HomeButtonComponent},
      { title: 'Evènements', content: HomePage}
    ]
  }
}
