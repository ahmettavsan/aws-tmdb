import { Component, inject } from '@angular/core';
import { MovieService } from '../../data-access/movie.service';
import { debounceTime, filter, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  public moviService = inject(MovieService);

  setFavorite(event: any) {
    console.log(event);
  }

  constructor() {
    fromEvent(window, 'scroll')
      .pipe(
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
        tap((x) => {
          const lastQuery = this.moviService.query$.getValue();
          this.moviService.query$.next({
            skip: lastQuery.skip || 0 + 20,
            take: lastQuery.take,
          });
        })
      )
      .subscribe();
  }
}
