import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, Observable, of, startWith, tap } from 'rxjs';
import { HttpResponseModel } from '../models/app-model';

const apiKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjY5NjYzZjAyZjk2MGQ2N2NmMGY3YzJkZGExZTMwNSIsIm5iZiI6MTY3OTAzNTA5OS4yMjcsInN1YiI6IjY0MTQwYWRiMjY2Nzc4MDBkNzA3MzdlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJ4ZjUVNeQLTBzNe97kuxXijzOJFRSlynMyCKffr5Fo';

const baseUrl = 'https://api.themoviedb.org/3';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);

  constructor() {}

  get<T>(url: string, params?: any): Observable<HttpResponseModel<T>> {
    return this.http
      .get<T>(baseUrl + url, {
        headers: {
          Authorization: 'Bearer ' + apiKey,
        },
      })
      .pipe(
        map((res) => ({
          Result: res,
          Pending: false,
        })),
        delay(400),
        startWith({ Pending: true, Result: undefined, Error: undefined }),
        catchError((res) => {
          return of({
            Result: undefined,
            Error: res.message,
            Pending: false,
          });
        })
      );
  }

  post<T, P>(url: string, params: P): Observable<HttpResponseModel<T>> {
    return this.http.post<T>(url, params).pipe(
      map((res) => ({
        Result: res,
        Pending: false,
        Error: undefined,
      })),
      startWith({ Pending: true, Error: '', Result: undefined })
    );
  }
}
