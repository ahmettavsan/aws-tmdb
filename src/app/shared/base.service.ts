import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { LoadingService } from './loading.service';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected _http = inject(HttpService);
  protected loadingService = inject(LoadingService);
  protected storeService = inject(StoreService);

  constructor() {}
}
