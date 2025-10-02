import { inject, Injectable } from "@angular/core";
import { MovieApiService } from "./movie-api.service";
import {
  BehaviorSubject,
  debounceTime,
  filter,
  fromEvent,
  map,
  scan,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { HttpResponseModel } from "src/app/models/app-model";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  constructor() {}

  private movieApiService = inject(MovieApiService);

  query$: BehaviorSubject<query> = new BehaviorSubject({
    skip: 0,
    take: 20,
  } as query);

  movie$ = fromEvent(window, "scroll").pipe(
    filter((x) => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      return scrollTop + windowHeight + 10 >= documentHeight;
    }),
    debounceTime(400),
    startWith({}),
    switchMap(() => this.movieApiService.movie()),
    scan(
      (
        acc: HttpResponseModel<{
          results: any[];
          totalPage: number;
        }>,
        cur: HttpResponseModel<{
          results: any[];
          totalPage: number;
        }>
      ) => {
        return {
          ...acc,
          ...cur,
          Result: {
            totalPage: cur.Result?.totalPage || 0,
            results: [
              ...(acc.Result?.results || []),
              ...(cur.Result?.results || []),
            ],
          },
        };
      }
    )
  );

  movieTypes$ = this.movieApiService.movieTypes().pipe(
    map((val) => ({ ...val, Result: val?.Result?.genres })),
    tap(console.log)
  );

  tvListType$ = this.movieApiService.tvListTypes().pipe(
    map((val) => ({ ...val, Result: val?.Result?.genres })),
    tap(console.log)
  );

  loadMovieType(model?: any) {
    return this.movieApiService.movieTypes().pipe(
      map((val) => ({ ...val, Result: val?.Result?.genres })),
      tap(console.log)
    );
  }
}

interface query {
  skip?: number;
  take?: number;
}
