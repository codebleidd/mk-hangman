import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-guessed-letters',
  templateUrl: './guessed-letters.component.html',
  styleUrls: ['./guessed-letters.component.scss']
})
export class GuessedLettersComponent implements OnInit, OnChanges {
  @Input() guessedLetter: string;
  @Input() wordToGuess: string;
  @Input() resetGame: boolean;

  _wordToGuess: string;
  guessedLetters: string[];
  constructor() {
    this.guessedLetters = [];
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    let guessedLetter: string = changes.guessedLetter ? changes.guessedLetter.currentValue : null;
    let resetGame: string = changes.resetGame ? changes.resetGame.currentValue : null;

    if (guessedLetter) {
      this.guessedLetters.push(...guessedLetter.split(''));
    }

    if (resetGame) {
      this.guessedLetters = [];
    }
  }

}
