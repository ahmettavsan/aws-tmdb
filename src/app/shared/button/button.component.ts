import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  template: `
    <button
      class="border-2 shrink-0 w-full  border-black bg-black text-white p-2 font-bold hover:bg-white hover:text-black"
      (click)="this.click$.emit($event)"
      (dblclick)="this.dblClick$.emit($event)"
    >
      {{ text }}
    </button>
  `,
})
export class ButtonComponent {
  @Output() click$: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() dblClick$: EventEmitter<MouseEvent> = new EventEmitter();
  @Input() text!: string;
}
