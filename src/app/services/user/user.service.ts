import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  findAllUsers() {
    return this.http.get<User>(AppSettings.APP_URL + '/users/');
  }

  findUserById(userId: number) {
    return this.http.get<User>(AppSettings.APP_URL + '/users/' + userId);
  }

  createUser(user: User) {
    return this.http.post<User>(AppSettings.APP_URL + '/users/', user);
  }

  login(mail: string, password: string) {
    const params = new HttpParams()
                  .set('mail', mail)
                  .set('password', password);
    return this.http.post<User>(AppSettings.APP_URL + '/users/login' , params);
  }
}
