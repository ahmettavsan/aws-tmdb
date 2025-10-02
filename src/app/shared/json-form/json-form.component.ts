import { AfterViewInit, Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormConfig } from "src/app/models/app-model";

@Component({
  selector: "app-json-form",
  templateUrl: "./json-form.component.html",
  styleUrls: ["./json-form.component.css"],
})
export class JsonFormComponent implements AfterViewInit {
  @Input() config!: FormConfig[];
  @Input() form!: FormGroup;

  public object = Object;

  constructor() {
    console.log(1);
  }

  ngAfterViewInit(): void {}
}
