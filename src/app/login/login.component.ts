import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {usersService} from './../users.service/users.service';
import { users } from '../modals/users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

/* --------------------------- Get All Users Data --------------------------- */


  allUsers:users[]
  currentUser:users;
/* ----------------------- Specific Error Validationg ----------------------- */

  login:FormGroup;

/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */


  constructor(private fb:FormBuilder,
    private userData:usersService) { }


/* -------------------------------------------------------------------------- */
/*                            NgOnInInit lifeCycle                            */
/* -------------------------------------------------------------------------- */

  ngOnInit(): void {

/* -------------------- Looking for anychange in userData ------------------- */

    this.userData.getUser().subscribe(users => {
      this.allUsers = users
    })


    this.login = this.fb.group({
      emailOrUsername:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }


/* ------------------------------- login info ------------------------------- */


  onLogin(loginInfo){
    if(this.login.valid){
      this.currentUser = this.allUsers.find(account =>{
        return account.email === loginInfo.value.emailOrUsername || account.name === loginInfo.value.emailOrUsername
      })
      if(this.currentUser){
        if(this.currentUser.password === loginInfo.value.password){
          console.log("logined")
        }else{
          console.log("wrong password")
        }
      }else{
        console.log("This account doesn't exist")
       }
    }
  }
}
