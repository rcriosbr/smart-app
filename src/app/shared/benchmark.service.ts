import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { Benchmark } from './benchmark';

@Injectable()
export class BenchmarkService {

  constructor(private http: HttpClient) { }

  getBenchmarkSeries(name: string): Promise<Benchmark[]> {
    var b = new Promise<Benchmark[]>(allLoadedFromServer => {
      var benchmarks: Benchmark[] = [];
      this.http.get(environment.backendAddress + '/benchmarks/' + name).subscribe(data => {
        for (let entry of <Array<any>>data) {
          benchmarks.push(entry);
        }
        allLoadedFromServer(benchmarks);
      });
    });

    return b;
  }
}
