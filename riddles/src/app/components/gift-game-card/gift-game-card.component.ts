import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonicModule,
  NavController,
} from '@ionic/angular';
export interface RiddleObjectType {
  solved: boolean;
  riddleText: string;
  locked: boolean;
  hint?: string;
  title: string;
  solution: string[];
}

@Component({
  selector: 'app-gift-game-card',
  templateUrl: './gift-game-card.component.html',
  styleUrls: ['./gift-game-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class GiftGameCardComponent implements OnInit {
  @Input() riddleList: RiddleObjectType[] = [];
  enabledWiggleRotate: boolean = false;
  textShine: boolean = false;
  wigglePosition: number = 1;

  private navCtrl = inject(NavController);

  ngOnInit() {}

  trackBySolution(index: number, item: RiddleObjectType) {
    return item.solution;
  }

  openRiddle(pos: number) {
    localStorage.setItem('activeRiddle', pos + '');
    this.navCtrl.navigateForward('/tabs/solve');
  }

  lockedClick(locked: boolean, pos: number) {
    if (locked) {
      this.wigglePosition = pos;
      this.enabledWiggleRotate = true;
      setTimeout(() => {
        this.enabledWiggleRotate = false;
      }, 700);
      this.textShine = true;
      setTimeout(() => {
        this.textShine = false;
      }, 2000);
    }
  }
}
