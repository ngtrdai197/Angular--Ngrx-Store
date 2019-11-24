import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '@environments/environment'

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private httpClient: HttpClient) {}

  fetchBlogs(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(environment.apiUrl)
  }
}
