import { NgModule } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { LoaderComponent } from "./loader/loader.component";
import { JsonFormComponent } from "./json-form/json-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./button/button.component";
import { InputComponent } from "./input/input.component";
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    CardComponent,
    LoaderComponent,
    JsonFormComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  exports: [
    CardComponent,
    LoaderComponent,
    JsonFormComponent,
    ButtonComponent,
    InputComponent,
  ],
})
export class SharedUiModule {}
