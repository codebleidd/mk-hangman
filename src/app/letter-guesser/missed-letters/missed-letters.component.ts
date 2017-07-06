import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-missed-letters',
  templateUrl: './missed-letters.component.html',
  styleUrls: ['./missed-letters.component.scss']
})
export class MissedLettersComponent implements OnInit, OnChanges {
  @Input() missedLetter: string;

  missedLetters: string[];
  constructor() {
    this.missedLetters = [];
  }

  ngOnInit() {
  }
  ngOnChanges () {
    this.missedLetters.push(this.missedLetter)
  }

}
