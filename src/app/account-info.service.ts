import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
<<<<<<< HEAD
=======
import { usersService } from './users.service/users.service';
>>>>>>> blue

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {
<<<<<<< HEAD
  constructor() { }
  private loginstatuts = new BehaviorSubject("Not Loged")
  userloged = this.loginstatuts.asObservable()
  onlogin(){
    
=======
  constructor(private users:usersService) { }


  private loginstatuts = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))
  userloged = this.loginstatuts.asObservable()
  getAccount(){
>>>>>>> blue
    this.loginstatuts.next(JSON.parse(localStorage.getItem('currentUser')))
    console.log(JSON.parse(localStorage.getItem('currentUser')))
  }
}
