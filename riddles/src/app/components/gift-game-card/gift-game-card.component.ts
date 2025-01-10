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

  private navCtrl = inject(NavController);

  ngOnInit() {}

  openRiddle(pos: number) {
    localStorage.setItem('activeRiddle', pos + '');
    this.navCtrl.navigateForward('/tabs/solve');
  }
}
