import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessedLettersComponent } from './guessed-letters.component';

describe('GuessedLettersComponent', () => {
  let component: GuessedLettersComponent;
  let fixture: ComponentFixture<GuessedLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuessedLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessedLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
