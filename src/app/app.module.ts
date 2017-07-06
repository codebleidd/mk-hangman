import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './core/rxjs';
// import { RoutingModule } from './app.routing.module';

import { ApiService } from './api-service/api-service.service';

import { AppComponent } from './app.component';
import { HangmanComponent } from './hangman/hangman.component';
// import { LetterGuesserModule } from './letter-guesser/letter-guesser.module';
import { MissedLettersComponent } from './letter-guesser/missed-letters/missed-letters.component';
import { GuessedLettersComponent } from './letter-guesser/guessed-letters/guessed-letters.component';

@NgModule({
  declarations: [
    AppComponent,
    HangmanComponent,
    MissedLettersComponent,
    GuessedLettersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
