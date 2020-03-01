import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {
  constructor() { }
  private loginstatuts = new BehaviorSubject(false)
  userloged = this.loginstatuts.asObservable()
  onlogin(){
    
    this.loginstatuts.next(JSON.parse(localStorage.getItem('currentUser')))
    console.log(JSON.parse(localStorage.getItem('currentUser')))
  }
}
