import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from 'src/app/models/faq';
import { AppSettings } from 'src/app/settings/app.settings';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private refreshNeeded$ = new Subject<void>();

  get refreshNeeded() {
    return this.refreshNeeded$;
  }

  constructor(protected http: HttpClient) { }

  findAllFaq() {
    return this.http.get<Faq[]>(AppSettings.APP_URL + '/faq/');
  }

  createFaq(faq: Faq) {
    return this.http.post<Faq>(AppSettings.APP_URL + '/faq/' , faq).pipe(
      tap(() => {
        this.refreshNeeded.next();
      }));
  }
}
