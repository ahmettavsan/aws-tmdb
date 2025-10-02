import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieComponent } from "./ui/movie/movie.component";
import { SharedUiModule } from "src/app/shared/shared-ui.module";
import { FilterComponent } from "./ui/filter/filter.component";
import { MatSelectModule } from "@angular/material/select";
@NgModule({
  declarations: [MovieComponent, FilterComponent],
  imports: [CommonModule, SharedUiModule, MatSelectModule],
  exports: [MovieComponent],
})
export class MovieModule {}
