import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteCharacterComponent } from './dialog-delete-character.component';

describe('DialogDeleteCharacterComponent', () => {
  let component: DialogDeleteCharacterComponent;
  let fixture: ComponentFixture<DialogDeleteCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDeleteCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
