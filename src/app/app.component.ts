import { Component, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LoadingService } from './shared/loading.service';
import { StoreService } from './shared/store.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  protected loadingService = inject(LoadingService);
  protected storeService = inject(StoreService);

  private _http = inject(HttpClient);
  private renderer = inject(Renderer2);

  pageConfig$!: Observable<any>;

  text: any;

  constructor() {}
  ngOnInit(): void {
    this.pageConfig$ = this._http.get('http://localhost:3000/');
  }
}
