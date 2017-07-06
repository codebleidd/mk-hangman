import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-guessed-letters',
  templateUrl: './guessed-letters.component.html',
  styleUrls: ['./guessed-letters.component.scss']
})
export class GuessedLettersComponent implements OnInit, OnChanges {
  @Input() guessedLetter: string;
  @Input() wordToGuess: string;

  guessedLetters: string[];
  wordLength: number;
  constructor() {
    this.guessedLetters = [];
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.guessedLetters.push(this.guessedLetter);
  }

}
