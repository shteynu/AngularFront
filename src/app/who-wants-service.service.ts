import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhoWantsServiceService {

  private obj: any = {response_code: 0, results: [{category: 'History', type: 'multiple', difficulty: 'medium', question: 'In relation to the British Occupation in Ireland, what does the IRA stand for.', correct_answer: 'Irish Republican Army', incorrect_answers: ['Irish Rebel Alliance', 'Irish Reformation Army', 'Irish-Royal Alliance']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'hard', question: 'The Internet Meme &quot;All your base are belong to us&quot; is based on the poorly translated English Version of which Video Game?', correct_answer: 'Zero Wing', incorrect_answers: ['F-Zero', 'Wing Commander', 'Star Wars: X-Wing']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'Excluding their instructor, how many members of Class VII are there in the game &quot;Legend of Heroes: Trails of Cold Steel&quot;?', correct_answer: '9', incorrect_answers: ['6', '10', '3']}, {category: 'Politics', type: 'multiple', difficulty: 'medium', question: 'The 2014 movie &quot;The Raid 2: Berandal&quot; was mainly filmed in which Asian country?', correct_answer: 'Indonesia', incorrect_answers: ['Thailand', 'Brunei', 'Malaysia']}, {category: 'General Knowledge', type: 'multiple', difficulty: 'hard', question: 'Sciophobia is the fear of what?', correct_answer: 'Shadows', incorrect_answers: ['Eating', 'Bright lights', 'Transportation']}, {category: 'History', type: 'multiple', difficulty: 'hard', question: 'During the Roman Triumvirate of 42 BCE, what region of the Roman Republic was given to Lepidus?', correct_answer: 'Hispania ', incorrect_answers: ['Italia', 'Gallia', 'Asia']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'easy', question: 'What is the first weapon you acquire in Half-Life?', correct_answer: 'A crowbar', incorrect_answers: ['A pistol', 'The H.E.V suit', 'Your fists']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'medium', question: 'In vanilla Minecraft, you can make armor out of all BUT which of the following?', correct_answer: 'Emeralds', incorrect_answers: ['Diamonds', 'Iron', 'Leather']}, {category: 'Entertainment: Video Games', type: 'multiple', difficulty: 'easy', question: 'How many differently shaped Tetris pieces are there?', correct_answer: '7', incorrect_answers: ['5', '6', '8']}, {category: 'Entertainment: Japanese Anime & Manga', type: 'multiple', difficulty: 'medium', question: 'The character Plum from &quot;No Game No Life&quot; is of what race?', correct_answer: 'Dhampir', incorrect_answers: ['Fl&uuml;gel', 'Imanity', 'Seiren']}]};

  private data = this.obj.results;


  constructor() { }

  getData() {
    return this.data;
  }
}

