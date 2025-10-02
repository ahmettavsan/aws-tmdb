import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() imagePath: string | undefined;
  @Input() title: string | undefined;
  @Input() id: string | undefined;

  @Output() emitId: EventEmitter<string> = new EventEmitter();
}
