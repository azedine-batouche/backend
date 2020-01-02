import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';
import { Character } from 'src/app/models/character';
import { User } from 'src/app/models/user';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  private refreshneeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this.refreshneeded$;
  }

  findAllCharacter() {
    return this.http.get<Character>(AppSettings.APP_URL + '/character/');
  }

  findAllUserByCharacter(idUser: number) {
    return this.http.get<Character[]>(AppSettings.APP_URL + '/character/all/' + idUser);
  }

  findCharacterById(characherId: number) {
    return this.http.get<Character>(AppSettings.APP_URL + '/character/' + characherId);
  }

  createCharacter(character: Character) {
    return this.http.post<Character>(AppSettings.APP_URL + '/character/', character);
  }

  shareCharacter(characterId: number, isShared: boolean) {
    return this.http.get<Character>(AppSettings.APP_URL + '/character/share/' + characterId + '/' + isShared);
  }

  deleteCharacter(characterId: number) {
    console.log('service delete : ' + characterId);
    return this.http.delete<HttpErrorResponse>(AppSettings.APP_URL + '/character/delete/' + characterId)
    .pipe(
      tap(() => {
        this.refreshneeded$.next();
      })
    );
  }
  findUserName(userId: number) {
    return this.http.get<User>(AppSettings.APP_URL + '/character/user/' + userId);
  }
  searchItemByName(itemSearch: string) {
    return this.http.get<Character[]>(AppSettings.APP_URL + 'character/search' + itemSearch);
  }
}
