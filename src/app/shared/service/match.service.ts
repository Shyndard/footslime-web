import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../entity/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchsBaseUrl = 'https://footslime-api.o2c.shyndard.eu/matchs';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchsBaseUrl);
  }

  getInProgress(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchsBaseUrl + '?inprogress=true');
  }
}
