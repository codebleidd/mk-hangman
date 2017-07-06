import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, LetterGuesserRoutingModule } from './letter-guesser-routing.module';

import { MissedLettersComponent } from './missed-letters/missed-letters.component';
import { GuessedLettersComponent } from './guessed-letters/guessed-letters.component';
import { LetterGuesserComponent } from './letter-guesser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    routedComponents,
    LetterGuesserRoutingModule,
    // MissedLettersComponent,
    // GuessedLettersComponent,
    // LetterGuesserComponent
  ]
})
export class LetterGuesserModule { }
