import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-missed-letters',
  templateUrl: './missed-letters.component.html',
  styleUrls: ['./missed-letters.component.scss']
})
export class MissedLettersComponent implements OnInit, OnChanges {
  @Input() missedLetter: string;
  @Input() resetGame: string;

  missedLetters: string[];
  constructor() {
    this.missedLetters = [];
  }

  ngOnInit() {
  }
  ngOnChanges (changes: SimpleChanges) {
    let missedLetter: string = changes.missedLetter ? changes.missedLetter.currentValue : null;
    let resetGame: boolean = changes.resetGame ? changes.resetGame.currentValue : false;

    if (missedLetter) {
      this.missedLetters.push(missedLetter);
    }

    if (resetGame) {
      this.missedLetters = [];
    }
  }

}
