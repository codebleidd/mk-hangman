import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Word } from '../shared/word.modal';
import { CONFIG } from '../core/config';

const apiUrl = CONFIG.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }
  getWord () {
    return this.http
      .get(apiUrl)
      .map((response: Response) => {
        if (response.json().word && response.json().id) {return new Word(response.json().id, response.json().word)}
      })
      .catch(this.errorHandler);
  }

  private errorHandler (error: Response) {
    return Observable.throw(error.json().error || 'Server Error');
  }

}
