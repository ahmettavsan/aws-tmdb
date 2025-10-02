import { Component } from "@angular/core";
import { MovieService } from "src/app/movie/data-access/movie.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"],
})
export class FilterComponent {
  constructor(public movieService: MovieService) {}
}
