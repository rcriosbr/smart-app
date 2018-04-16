import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class DealService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.backendAddress + '/deals');
  }

  get(id: string) {
    return this.http.get(environment.backendAddress + '/deals/' + id);
  }

  save(deal: any): Observable<any> {
    let result: Observable<Object>;
    if (deal['href']) {
      result = this.http.put(deal.href, deal);
    } else {
      result = this.http.post(environment.backendAddress + '/deals', deal);
    }
    return result;
  }
}
