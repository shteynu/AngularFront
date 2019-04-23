import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {

  static messageBox: Subject<any> = new Subject();

  constructor() { }

  getMsgBox() {
    return MessageBoxService.messageBox;
  }


}
