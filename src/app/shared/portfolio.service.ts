import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { Portfolio } from './portfolio';

@Injectable()
export class PortfolioService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(environment.backendAddress + '/portfolios');
  }

  getMasters(): Observable<any> {
    return this.http.get(environment.backendAddress + '/portfolios/masters');
  }

  getAssets(): Observable<any> {
    return this.http.get(environment.backendAddress + '/portfolios/assets');
  }

  getSecondLevelPortfolios(): Observable<any> {
    return this.http.get(environment.backendAddress + '/portfolios/secondLevel');
  }

  get(id: string) {
    return this.http.get(environment.backendAddress + '/portfolios/' + id);
  }

  countPortfolios(): Observable<any> {
    return this.http.get(environment.backendAddress + '/portfolios/countMasters/');
  }

  sumPortfolios(): Observable<any> {
    return this.http.get(environment.backendAddress + '/portfolios/sumRootPorfolios/');
  }

  findPorfolioFromId(id: string): Portfolio {
    var portfolio = new Portfolio();

    this.get(id)
      .subscribe(data => {
        portfolio.id = data['id'],
          portfolio.name = data['name'],
          portfolio.creationDate = data['creationDate'],
          portfolio.lastUpdateDate = data['lastUpdateDate'],
          portfolio.value = data['value'],
          portfolio.quotes = data['quotes'],
          portfolio.quoteValue = data['quoteValue']
      });

    return portfolio;
  }

  getRootRevisions(): Promise<Portfolio[]> {
    var p = new Promise<Portfolio[]>(allLoadedFromServer => {
      var portfolios: Portfolio[] = [];
      this.http.get(environment.backendAddress + '/portfolios/revisions').subscribe(data => {
        for (let entry of <Array<any>>data) {
          portfolios.push(entry);
        }
        allLoadedFromServer(portfolios);
      });
    });

    return p;
  }

  getRevisions(id: string): Promise<Portfolio[]> {
    var p = new Promise<Portfolio[]>(allLoadedFromServer => {
      var portfolios: Portfolio[] = [];
      this.http.get(environment.backendAddress + '/portfolios/revisions/' + id).subscribe(data => {
        for (let entry of <Array<any>>data) {
          portfolios.push(entry);
        }
        allLoadedFromServer(portfolios);
      });
    });

    return p;
  }

  save(portfolio: any): Observable<any> {
    let result: Observable<Object>;
    if (portfolio['href']) {
      result = this.http.put(portfolio.href, portfolio);
    } else {
      result = this.http.post(environment.backendAddress + '/portfolios', portfolio);
    }
    return result;
  }
}
