import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@blog/environments/environment.prod";

@Injectable({
  providedIn: "root"
})
export class BlogsService {
  constructor(private _httpClient: HttpClient) {}

  fetchBlogs(): Observable<Array<any>> {
    return this._httpClient.get<Array<any>>(environment.apiUrl);
  }
}
