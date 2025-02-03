import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  AlertController,
  IonicModule,
  NavController,
  ToastController,
} from '@ionic/angular';
import { take } from 'rxjs';
import { RiddleObjectType } from 'src/app/components/gift-game-card/gift-game-card.component';
import { RiddleService } from 'src/app/services/riddles-service/riddle.service';

@Component({
  selector: 'app-riddle-page',
  templateUrl: './riddle-page.page.html',
  styleUrls: ['./riddle-page.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
})
export class RiddlePagePage implements OnInit {
  answerInput?: string;
  activeRiddle: RiddleObjectType = {
    solved: false,
    riddleText: '',
    locked: false,
    title: '',
    solution: [''],
  };
  riddleList: RiddleObjectType[] = [];
  enabledWiggle: boolean = false;
  private navCtrl = inject(NavController);
  private alertCtrl = inject(AlertController);
  private toastCtrl = inject(ToastController);
  private riddlesService = inject(RiddleService);
  constructor() {}

  ngOnInit() {}

  checkAnswer() {
    if (this.answerInput?.toLowerCase()) {
      if (
        this.activeRiddle.solution.includes(this.answerInput?.toLowerCase())
      ) {
        this.showAlert(`The answer was ${this.answerInput}`, 'Correct!');
      } else {
        this.toastCtrl
          .create({
            message:
              'Opps! that is the wrong answer... But you have infinite tries because you are cute!',
            duration: 3500,
            position: 'bottom',
            icon: 'close-circle-outline',
            color: 'danger',
          })
          .then((toastEl) => {
            toastEl.present();
          });
        this.enabledWiggle = true;
        setTimeout(() => {
          this.enabledWiggle = false;
        }, 500);
      }
    }
  }

  showHint() {
    this.alertCtrl
      .create({
        header: 'Hint:',
        message: this.activeRiddle.hint,
        buttons: [
          {
            text: 'I get it now!',
            role: 'confirm',
            handler: () => {},
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  showAlert(message: string, header: string) {
    this.alertCtrl
      .create({
        header,
        message: message,
        buttons: [
          {
            text: 'Give me my gift!',
            role: 'confirm',
            handler: () => {
              this.riddlesService.solvedRiddles
                .pipe(take(1))
                .subscribe((solvedNumber) => {
                  this.riddlesService.setSolvedRiddles(solvedNumber + 1);
                });
              this.activeRiddle.solved = true;
              const acttiveRiddlePosition =
                localStorage.getItem('activeRiddle');
              if (acttiveRiddlePosition) {
                this.riddleList[+acttiveRiddlePosition] = this.activeRiddle;
                if (+acttiveRiddlePosition + 2 <= this.riddleList.length) {
                  this.riddleList[+acttiveRiddlePosition + 1].locked = false;
                }
              }
              localStorage.setItem(
                'riddleListData',
                JSON.stringify(this.riddleList)
              );
              this.navCtrl.navigateBack('/tabs/tab1');
            },
          },
        ],
      })
      .then((alertEl) => alertEl.present());
  }

  ionViewWillEnter() {
    const acttiveRiddlePosition = localStorage.getItem('activeRiddle');
    if (!acttiveRiddlePosition) {
      this.navCtrl.navigateBack('/tabs/tab1');
    }
    this.riddleList = JSON.parse(localStorage.getItem('riddleListData') ?? '');
    if (acttiveRiddlePosition) {
      this.activeRiddle = this.riddleList[+acttiveRiddlePosition];
    }
    this.answerInput = '';
  }
}
