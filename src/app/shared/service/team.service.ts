import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../entity/team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamsBaseUrl = 'https://footslime-api.o2c.shyndard.eu/teams';

  constructor(private http: HttpClient) {}

  createTeam(name: String, usernames: String[]): Observable<Team> {
    return this.http.post<Team>(this.teamsBaseUrl, { name, usernames });
  }

  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsBaseUrl);
  }
}
