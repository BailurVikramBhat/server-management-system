import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Server } from '../model/server';
@Injectable({
  providedIn: 'root',
})
export class ServerApiService {
  constructor(private httpClient: HttpClient) {}

  getServers(): Observable<Server[]> {
    return this.httpClient
      .get<Server[]>('/assets/testing/api/server-list.json')
      .pipe(map((data: any) => data.servers));
  }
}
