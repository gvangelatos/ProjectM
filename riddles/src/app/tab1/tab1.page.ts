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
  riddleList: RiddleObjectType[] = [
    {
      solved: false,
      riddleText:
        "I'm seen in peace, yet signal “go,” \nI'm part of rainbows, as you may know. \nIn emerald jewels, I brightly gleam, \nA symbol of growth and nature's dream. \nWhat color am I?",
      locked: false,
      hint: 'string',
      title: "Nature's Secret Shade",
      solution: ['green'],
    },
    {
      solved: false,
      riddleText:
        "I hold tales of kings and lands afar, \nAdventures grand and lessons bizarre. \nYou'll turn my face to seek what's told, \nMy words are treasures more valuable than gold. \nWhat am I?",
      locked: true,
      hint: 'string',
      title: 'The Keeper of Stories',
      solution: ['book'],
    },
    {
      solved: false,
      riddleText:
        "I travel far without a sound, \nIn me, words of love or news are found. \nSealed with care, I make my way, \nTo brighten someone's night or day. What am I?",
      locked: true,
      hint: 'string',
      title: 'Words on a Journey',
      solution: ['letter'],
    },
    {
      solved: false,
      riddleText:
        "I make you sweat on a sunny day, \nAnd keep you warm when skies are gray. \nI'm found in fire, and the sun above, \nWhat am I, if not warmth and love?",
      locked: true,
      hint: 'string',
      title: 'The Warmth Within',
      solution: ['heat'],
    },
    {
      solved: false,
      riddleText:
        "I'm red but not a rose, I beat but have no drum, I'm where your love grows, And where your feelings come.  What am I?",
      locked: true,
      hint: 'string',
      title: "Love's Keeper",
      solution: ['heart'],
    },
  ];

  private alertCtrl = inject(AlertController);

  private riddlesService = inject(RiddleService);
  constructor() {}

  refreshList() {
    this.riddleList = [
      {
        solved: false,
        riddleText:
          "I'm seen in peace, yet signal “go,” \nI'm part of rainbows, as you may know. \nIn emerald jewels, I brightly gleam, \nA symbol of growth and nature's dream. \nWhat color am I?",
        locked: false,
        hint: 'string',
        title: "Nature's Secret Shade",
        solution: ['green'],
      },
      {
        solved: false,
        riddleText:
          "I hold tales of kings and lands afar, \nAdventures grand and lessons bizarre. \nYou'll turn my face to seek what's told, \nMy words are treasures more valuable than gold. \nWhat am I?",
        locked: true,
        hint: 'string',
        title: 'The Keeper of Stories',
        solution: ['book'],
      },
      {
        solved: false,
        riddleText:
          "I make you sweat on a sunny day, \nAnd keep you warm when skies are gray. \nI'm found in fire, and the sun above, \nWhat am I, if not warmth and love?",
        locked: true,
        hint: 'string',
        title: 'The Warmth Within',
        solution: ['heat'],
      },
      {
        solved: false,
        riddleText:
          "I travel far without a sound, \nIn me, words of love or news are found. \nSealed with care, I make my way, \nTo brighten someone's night or day. What am I?",
        locked: true,
        hint: 'string',
        title: 'Words on a Journey',
        solution: ['letter'],
      },
      {
        solved: false,
        riddleText:
          "I'm red but not a rose, I beat but have no drum, I'm where your love grows, And where your feelings come. I quicken with glances, I soften with care, A home for your longing, Forever I'm there. What am I?",
        locked: true,
        hint: 'string',
        title: "Love's Keeper",
        solution: ['heart'],
      },
    ];
    this.riddlesService.setSolvedRiddles(0);
    localStorage.setItem('riddleListData', JSON.stringify(this.riddleList));
  }

  showInfo() {
    this.alertCtrl
      .create({
        header: 'How to Play?',
        message:
          'Solve each riddle and presend each solution to George to get your corresponding present. ',
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
