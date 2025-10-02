import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormConfig } from "../models/app-model";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.css"],
})
export class ConfigurationComponent {
  constructor(private dialogRef: MatDialogRef<any>) {}

  form = new FormGroup({
    key: new FormControl(),
    type: new FormControl(),
    title: new FormControl(),
    required: new FormControl(),
  });
  configuration: FormConfig[] = [
    { type: "text", key: "key", title: "Key", required: true },
    { type: "text", key: "type", title: "type", required: true },
    { type: "text", key: "title", title: "title", required: true },
    { type: "text", key: "required", title: "required", required: true },
  ];

  save() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }
}
