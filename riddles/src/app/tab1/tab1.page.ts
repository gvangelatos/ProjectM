import { Component, inject } from '@angular/core';
import { RiddleObjectType } from '../components/gift-game-card/gift-game-card.component';
import { AlertController } from '@ionic/angular';
import { RiddleService } from '../services/riddles-service/riddle.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  readonly startingList: RiddleObjectType[] = [
    {
      solved: false,
      riddleText:
        "I'm seen in peace, yet signal “go,” \nI'm part of rainbows, as you may know. \nIn emerald jewels, I brightly gleam, \nA symbol of growth and nature's dream. \nWhat color am I?",
      locked: false,
      hint: 'The color of trees!',
      title: "Nature's Secret Shade",
      solution: ['green'],
    },
    {
      solved: false,
      riddleText:
        "I hold tales of kings and lands afar, \nAdventures grand and lessons bizarre. \nYou'll turn my face to seek what's told, \nMy words are treasures more valuable than gold. \nWhat am I?",
      locked: true,
      hint: 'You have seen me read one when we video called!',
      title: 'The Keeper of Stories',
      solution: ['book'],
    },
    {
      solved: false,
      riddleText:
        "I travel far without a sound, \nIn me, words of love or news are found. \nSealed with care, I make my way, \nTo brighten someone's night or day. What am I?",
      locked: true,
      hint: 'Comes in an envelope!',
      title: 'Words on a Journey',
      solution: ['letter'],
    },
    {
      solved: false,
      riddleText:
        "I make you sweat on a sunny day, \nAnd keep you warm when skies are gray. \nI'm found in fire, and the sun above, \nWhat am I, if not warmth and love?",
      locked: true,
      hint: 'Starts with the letter "H"',
      title: 'The Warmth Within',
      solution: ['heat'],
    },
    {
      solved: false,
      riddleText:
        "I'm red but not a rose, I beat but have no drum, I'm where your love grows, And where your feelings come.  What am I?",
      locked: true,
      hint: 'Mine beats for you!',
      title: "Love's Keeper",
      solution: ['heart'],
    },
    {
      solved: false,
      riddleText:
        "I have a tail, but I'm not a mouse, I roam the halls inside your house. I love to nap in the sun's warm glow, And when I fall, I land just so. I purr when happy, hiss when mad, A playful friend when you are sad. What am I?",
      locked: true,
      hint: 'Casper is one!',
      title: 'A Furry Mystery',
      solution: ['cat'],
    },
  ];
  riddleList: RiddleObjectType[] = this.startingList;

  private alertCtrl = inject(AlertController);

  private riddlesService = inject(RiddleService);
  constructor() {}

  refreshList() {
    this.riddleList = this.startingList;
    this.riddlesService.setSolvedRiddles(0);
    localStorage.setItem('riddleListData', JSON.stringify(this.riddleList));
  }

  showInfo() {
    this.alertCtrl
      .create({
        header: 'How to Play?',
        message:
          "One riddle at a time, that's how we play, Solve it right, and George will brighten your day! Give him the answer, make sure it's clear, And a special present will soon appear! 🎁✨  Ready to play? Let the riddles begin!",
        buttons: [
          {
            text: 'Go It!',
            role: 'confirm',
            handler: () => {},
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  ionViewWillEnter() {
    const riddleList_temp = localStorage.getItem('riddleListData');
    if (riddleList_temp) {
      this.riddleList = JSON.parse(riddleList_temp);
    } else {
      localStorage.setItem('riddleListData', JSON.stringify(this.riddleList));
    }
  }
}
