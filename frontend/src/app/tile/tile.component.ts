import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent {
  @Input() color?: string = 'white';
  @Input() width?: number = 300;
  @Input() height?: number = 250;
  @Input() text?: string = 'Text';
  @Input() textColor?: string = 'white';
  @Input() textSize?: string = 1.5 + 'em';
  @Input() shadowColor?: string = 'white';
  @Input() disabled?: boolean = false;

  @Output() tileClick = new EventEmitter<void>();

  onTileClick() {
    this.tileClick.emit();
  }
}
