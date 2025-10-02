import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-input",
  template: `<input
    draggable="true"
    (dblclick)="this.dblClick$.emit($event)"
    (dragstart)="this.dragStart$.emit($event)"
    (dragend)="this.dragStart$.emit($event)"
    [type]="type"
    [placeholder]="placeholder"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  /> `,
})
export class InputComponent {
  @Input() type: "email" | "text" | " password" | "number" | "date" = "text";
  @Input() placeholder: string = "";
  @Output() dragStart$: EventEmitter<DragEvent> = new EventEmitter();
  @Output() dragEnd$: EventEmitter<DragEvent> = new EventEmitter();
  @Output() dblClick$: EventEmitter<MouseEvent> = new EventEmitter();
}
