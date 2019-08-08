import {AfterContentInit, AfterViewChecked, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-who-wants-to-be',
  templateUrl: './who-wants-to-be.component.html',
  styleUrls: ['./who-wants-to-be.component.css']
})
export class WhoWantsToBeComponent implements OnInit, AfterContentInit {


  private obj: any = {response_code: 0, results: [{category: 'History', type: 'multiple', difficulty: 'medium', question: 'In relation to the British Occupation in Ireland, what does the IRA stand for.', correct_answer: 'Irish Republican Army', incorrect_answers: ['Irish Rebel Alliance', 'Irish Reformation Army', 'Irish-Royal Alliance']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'hard', question: 'The Internet Meme "All your base are belong to us" is based on the poorly translated English Version of which Video Game?', correct_answer: 'Zero Wing', incorrect_answers: ['F-Zero', 'Wing Commander', 'Star Wars: X-Wing']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'Excluding their instructor, how many members of Class VII are there in the game "Legend of Heroes: Trails of Cold Steel"?', correct_answer: '9', incorrect_answers: ['6', '10', '3']}, {category: 'Politics', type: 'multiple', difficulty: 'medium', question: 'The 2014 movie "The Raid 2: Berandal" was mainly filmed in which Asian country?', correct_answer: 'Indonesia', incorrect_answers: ['Thailand', 'Brunei', 'Malaysia']}, {category: 'General Knowledge', type: 'multiple', difficulty: 'hard', question: 'Sciophobia is the fear of what?', correct_answer: 'Shadows', incorrect_answers: ['Eating', 'Bright lights', 'Transportation']},
      {category: 'History', type: 'multiple', difficulty: 'hard', question: 'During the Roman Triumvirate of 42 BCE, what region of the Roman Republic was given to Lepidus?', correct_answer: 'Hispania ', incorrect_answers: ['Italia', 'Gallia', 'Asia']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'easy', question: 'What is the first weapon you acquire in Half-Life?', correct_answer: 'A crowbar', incorrect_answers: ['A pistol', 'The H.E.V suit', 'Your fists']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In vanilla Minecraft, you can make armor out of all BUT which of the following?', correct_answer: 'Emeralds', incorrect_answers: ['Diamonds', 'Iron', 'Leather']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'easy', question: 'How many differently shaped Tetris pieces are there?', correct_answer: '7', incorrect_answers: ['5', '6', '8']}, {category: 'Entertainment: Japanese Anime & Manga', type: 'multiple', difficulty: 'medium', question: 'The character Plum from "No Game No Life" is of what race?', correct_answer: 'Dhampir', incorrect_answers: ['Fl&uuml;gel', 'Imanity', 'Seiren']}]};

  private data = this.obj.results;

  private questionNumber: any [] = ['Q:1', 'Q:2', 'Q:3', 'Q:4', 'Q:5', 'Q:6', 'Q:7', 'Q:8', 'Q:9', 'Q:10'];


  private click = 0;

  private word = 'OK';
  private selectedFirst;
  private selectedSecond;
  private selectedThird;
  private selectedThourth;
  private selectedButton;
  private correctAnswer;
  private incorrectAnswer;

  private val1;
  private val2;
  private val3;
  private val4;

  private correctAnswerFirst;
  private incorrectAnswerFirst;
  private correctAnswerSecond;
  private incorrectAnswerSecond;
  private correctAnswerThird;
  private incorrectAnswerThird;
  private correctAnswerThourth;
  private incorretAnswerThourth;

  private firstToggled;
  private secondToggled;
  private thirdToggled;
  private thourthToggled;

  private hoverFirst;
  private hoverSecond;
  private hoverThird;
  private hoverThourth;


  private buttonHover;

  constructor() {
  }

  ngOnInit() {
    this.flags();
    this.insertAnswers();
  }

  getAnswers(correct, incorrect: any []) {
    const answers = new Array();
    answers.push(correct);
    for (const j in incorrect) {
        answers.push(incorrect[j]);
      }
    this.shuffle(answers);
    return answers;
    }

    insertAnswers() {
    for (const i in this.data) {
      this.data[i].shuffleAnswers = this.getAnswers(this.data[i].correct_answer, this.data[i].incorrect_answers);
      }
    }

    shuffle(array: any []) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

    }

  toggleColorFirst() {
    if (this.secondToggled === false && this.thirdToggled === false && this.thourthToggled === false) {
      this.selectedFirst = !this.selectedFirst;
      this.selectedButton = !this.selectedButton;
      this.firstToggled = !this.firstToggled;
      this.hoverFirst = false;
    }
  }

  toggleColorSecond() {
    if (this.firstToggled === false && this.thirdToggled === false && this.thourthToggled === false) {
      this.selectedSecond = !this.selectedSecond;
      this.selectedButton = !this.selectedButton;
      this.secondToggled = !this.secondToggled;
      this.hoverSecond = false;
    }
  }

  toggleColorThird() {
    if (this.firstToggled === false && this.secondToggled === false && this.thourthToggled === false) {
      this.selectedThird = !this.selectedThird;
      this.selectedButton = !this.selectedButton;
      this.thirdToggled = !this.thirdToggled;
      this.hoverThird = false;
    }
  }

  toggleColorThourth() {
    if (this.firstToggled === false && this.secondToggled === false && this.thirdToggled === false) {
      this.selectedThourth = !this.selectedThourth;
      this.selectedButton = !this.selectedButton;
      this.thourthToggled = !this.thourthToggled;
      this.hoverThourth = false;
    }
  }

  action() {
    if (this.word === 'OK') {
      if (this.selectedFirst === true) {
        if (this.val1 === this.data[this.click].correct_answer) {
          this.correctAnswer = true;
          this.correctAnswerFirst = true;
          this.word = 'Continue';


        } else {
          this.incorrectAnswer = true;
          this.incorrectAnswerFirst = true;
          this.word = 'Continue';

        }
      } else if (this.selectedSecond === true) {
        if (this.val2 === this.data[this.click].correct_answer) {
          this.correctAnswer = true;
          this.correctAnswerSecond = true;
          this.word = 'Continue';

        } else {
          this.incorrectAnswer = true;
          this.incorrectAnswerSecond = true;
          this.word = 'Continue';
        }
      } else if (this.selectedThird === true) {
        if (this.val3 === this.data[this.click].correct_answer) {
          this.correctAnswer = true;
          this.correctAnswerThird = true;
          this.word = 'Continue';
        } else {
          this.incorrectAnswer = true;
          this.incorrectAnswerThird = true;
          this.word = 'Continue';
        }
      } else if (this.selectedThourth === true) {
        if (this.val4 === this.data[this.click].correct_answer) {
          this.correctAnswer = true;
          this.correctAnswerThourth = true;
          this.word = 'Continue';
        } else {
          this.incorrectAnswer = true;
          this.incorretAnswerThourth = true;
          this.word = 'Continue';
        }
      }
    } else {
      this.flags();
      this.click++;
      this.word = 'OK';
      this.loopAnswers();
    }
  }

  ngAfterContentInit(): void {
    this.val1 = this.data[this.click].shuffleAnswers[0];
    this.val2 = this.data[this.click].shuffleAnswers[1];
    this.val3 = this.data[this.click].shuffleAnswers[2];
    this.val4 = this.data[this.click].shuffleAnswers[3];

  }

  loopAnswers() {
    if (this.click < this.data.length) {
      this.val1 = this.data[this.click].shuffleAnswers[0];
      this.val2 = this.data[this.click].shuffleAnswers[1];
      this.val3 = this.data[this.click].shuffleAnswers[2];
      this.val4 = this.data[this.click].shuffleAnswers[3];
    } else {
      alert('The game is over. The results at zoominfo');
    }
  }

  flags() {
    this.selectedFirst = false;
    this.selectedSecond = false;
    this.selectedThird = false;
    this.selectedThourth = false;
    this.selectedButton = false;
    this.correctAnswer = false;
    this.incorrectAnswer = false;
    this.correctAnswerFirst = false;
    this.incorrectAnswerFirst = false;
    this.correctAnswerSecond = false;
    this.incorrectAnswerSecond = false;
    this.correctAnswerThird = false;
    this.incorrectAnswerThird = false;
    this.correctAnswerThourth = false;
    this.incorretAnswerThourth = false;
    this.firstToggled = false;
    this.secondToggled = false;
    this.thirdToggled = false;
    this.thourthToggled = false;
    this.hoverFirst = false;
    this.hoverSecond = false;
    this.hoverThird = false;
    this.hoverThourth = false;
    this.buttonHover = false;

  }


  firstHoverOn() {
   if (this.selectedFirst === false) {
     this.hoverFirst = true;
   }

  }

  firstHoverOut() {
    this.hoverFirst = false;
    }

  secondHoverOn() {
    if (this.selectedSecond === false) {
      this.hoverSecond = true;
    }
  }

  secondHoverOut() {
    this.hoverSecond = false;
  }

  thirdHoverOn() {
    if (this.selectedThird === false) {
      this.hoverThird = true;
    }
  }

  thirdHoverOut() {
    this.hoverThird = false;
  }

  thourthHoverOn() {
    if (this.selectedThourth === false) {
      this.hoverThourth = true;
    }
  }

  thourthHoverOut() {
    this.hoverThourth = false;
  }

  buttonOn() {
    if (this.selectedFirst === true || this.selectedSecond === true || this.selectedThird === true || this.selectedThourth === true) {
      this.buttonHover = true;
    }
  }

  buttonOut() {
    this.buttonHover = false;
  }

}


