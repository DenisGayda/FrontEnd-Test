import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getData<T>(name: string): Observable<T> {
    return this.http.get<T>('https://jsonplaceholder.typicode.com/' + name);
  }
}
