import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../entity/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersBaseUrl = 'https://footslime-api.o2c.shyndard.eu/players';

  constructor(private http: HttpClient) {}

  createUser(username: String): Observable<User> {
    return this.http.post<User>(this.usersBaseUrl + '?autocreateteam=true', {
      username,
    });
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersBaseUrl);
  }
}
