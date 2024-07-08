import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent {
  @Input({ required: true }) title!: string;
}
