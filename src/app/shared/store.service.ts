import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { user } from '../models/app-model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  user$: BehaviorSubject<user | undefined> = new BehaviorSubject<
    user | undefined
  >(undefined);
}
