import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, finalize, of, tap } from 'rxjs';
import { BaseService } from 'src/app/shared/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor() {
    super();
  }
  protected route = inject(Router);

  login(username: string, password: string) {
    return of({ Success: true }).pipe(
      tap((res) => this.loadingService.open()),
      delay(500),
      finalize(() => {
        this.loadingService.close();
      }),
      tap(() => this.storeService.user$.next({ username, password })),
      tap(() => this.route.navigate(['/home']))
    );
  }
}
