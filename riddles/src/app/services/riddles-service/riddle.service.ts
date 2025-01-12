import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RiddleService {
  private _solvedRiddles = new BehaviorSubject<number>(0);
  constructor() {}

  get solvedRiddles() {
    return this._solvedRiddles;
  }

  initializeSolvedRiddled() {
    const solvedRiddles_temp = localStorage.getItem('solvedRiddlesNumber');

    if (solvedRiddles_temp) {
      this._solvedRiddles.next(+JSON.parse(solvedRiddles_temp));
    } else {
      localStorage.setItem('solvedRiddlesNumber', JSON.stringify(0));
      this._solvedRiddles.next(0);
    }
  }

  setSolvedRiddles(solvedRiddlesNumber: number) {
    localStorage.setItem(
      'solvedRiddlesNumber',
      JSON.stringify(solvedRiddlesNumber)
    );
    this._solvedRiddles.next(solvedRiddlesNumber);
  }
}
