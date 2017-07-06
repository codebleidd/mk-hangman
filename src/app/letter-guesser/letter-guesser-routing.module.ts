import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LetterGuesserComponent } from './letter-guesser.component';

const routes: Routes = [
  {
    path: '', component: LetterGuesserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetterGuesserRoutingModule { }

export const routedComponents = [LetterGuesserComponent];
