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
    console.log('hello')
      console.log(this.login.value)
  }
}
