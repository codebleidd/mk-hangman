import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterGuesserComponent } from './letter-guesser.component';

describe('LetterGuesserComponent', () => {
  let component: LetterGuesserComponent;
  let fixture: ComponentFixture<LetterGuesserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterGuesserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
