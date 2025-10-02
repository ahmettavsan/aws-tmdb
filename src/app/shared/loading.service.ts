import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  concatMap,
  finalize,
  Observable,
  of,
  tap,
} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  //Observable Subjectlerden farklı olarak tek bir noktadan değer emit edebilirler.
  //biz değeri değiştirmek istediğimiz için loadingSubject'i private olarak sadece burada kullanıyoruz

  constructor() {}

  showUntilCompleted<T>(source: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.open()),
      concatMap(() => source),
      finalize(() => this.close())
    );
  }

  open() {
    this.loadingSubject.next(true);
  }

  close() {
    this.loadingSubject.next(false);
  }
}
