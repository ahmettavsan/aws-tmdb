import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpResponseModel } from "src/app/models/app-model";
import { BaseService } from "src/app/shared/base.service";

@Injectable({
  providedIn: "root",
})
export class MovieApiService extends BaseService {
  constructor() {
    super();
  }

  movie(): Observable<
    HttpResponseModel<{ results: any[]; totalPage: number }>
  > {
    return this._http.get<{ results: any[]; totalPage: number }>(
      "/discover/movie"
    );
  }

  addFavorite() {
    return this._http.get<boolean>("/account/18357013/favorite");
  }

  movieTypes() {
    return this._http.get<{ genres: { id: number; name: string }[] }>(
      "/genre/movie/list?language=en"
    );
  }
  tvListTypes() {
    return this._http.get<{ genres: { id: number; name: string }[] }>(
      "/genre/tv/list?language=en"
    );
  }
}
