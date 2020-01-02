import { Component, OnInit, Input, Output } from '@angular/core';
import { CharacterService } from 'src/app/services/character/character.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { MatDialog } from '@angular/material';
import { DialogDeleteCharacterComponent } from '../dialog-delete-character/dialog-delete-character.component';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, switchMap, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/settings/app.settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User ;
  messageToSendP  =  ' ' ;
  searchItems: Character[];
  searchController = new FormControl();
  filterSearch: Observable<Character[]>;
  inputSearchSubject = new Subject<string>();
  errorMsg: string;
  listCharacter: Character[];
  constructor(private characterService: CharacterService, private router: Router,
              public dialogDeleteCharacter: MatDialog, private http: HttpClient) {
    this.checkUser(); }
    test: any;
    checkUser() {
      if (localStorage.getItem('currentUser') === undefined || localStorage.getItem('currentUser') == null) {
        this.router.navigate(['/login']);
        return ;
      }
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
      this.findAllUserByCharacter();
      this.searchController.valueChanges.pipe(debounceTime(1000),
      switchMap(value => this.http.get<Character[]>(AppSettings.APP_URL + '/character/search?serach=' + value)))
      .subscribe(
        // data => {
        //   if (data['search'] === undefined) {
        //     this.errorMsg = data['Error'];
        //     this.searchItems = [];
        //   } else {
        //     this.errorMsg = '';
        //     this.searchItems = data['search'];
        //   }
        // }
        );
      }
      findAllUserByCharacter() {
        this.characterService.findAllUserByCharacter(this.user.idUser)
        .pipe()
        .subscribe(data => {
          this.listCharacter = data;
          // this.messageToSendP = this.listCharacter[0].user.firstName;
        },
        errors => console.log(errors));
      }
      delete(id: number) {
        console.log(id);
        if (id == null) {
          return;
        }
        this.characterService.deleteCharacter(id)
        .subscribe(
          response => console.log(response),
          errors => console.log(errors)
          );
        }
        searchItem(item: string) {
          if (item != null) {
            this.characterService.searchItemByName(item)
            .pipe()
            .subscribe(
              data => this.searchItems = data,
              errors => console.log(errors));
            }
          }
          openDialog(idRef: number): void {
            const dialogRef = this.dialogDeleteCharacter.open(DialogDeleteCharacterComponent, {
              width: '250px',
              data: {id: idRef}
            });
            dialogRef.afterClosed().subscribe(result => {
              console.log('The dialog was closed');
              this.delete(result.id);
              console.log(result.id);
              if (result) {
                window.location.reload(); }
              });
            }
            createCharacter() {
              this.router.navigate(['/createCharacter']);
            }
          }
