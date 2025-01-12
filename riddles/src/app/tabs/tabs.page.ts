import { Component, inject, OnInit } from '@angular/core';
import { RiddleService } from '../services/riddles-service/riddle.service';
import { BehaviorSubject, ReplaySubject, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage implements OnInit {
  solvedRiddlesNumber: number = 0;
  private riddlesService = inject(RiddleService);
  private destroyed$: Subject<boolean> = new Subject();
  constructor() {}

  ngOnInit() {
    this.riddlesService.solvedRiddles
      .pipe(takeUntil(this.destroyed$))
      .subscribe((currentSolvedRiddlesNumber) => {
        this.solvedRiddlesNumber = currentSolvedRiddlesNumber;
      });
    this.riddlesService.initializeSolvedRiddled();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
