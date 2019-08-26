import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsmServiceService {
  URL : string ="https://www.openstreetmap.org/search?query="
  constructor(
    private http: HttpClient
  ) { }

  search(query:string):Observable<any>{
    return this.http.get(`${this.URL}${query}`)
  }
}
