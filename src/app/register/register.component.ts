import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
<<<<<<< HEAD

import {users} from './../modals/users';
import {usersService} from './../users.service/users.service';

=======
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD


/* ------------------------------- Get MyData ------------------------------- */

  allUsers:users[];

/* ---------------- Check For Email To Display specific error --------------- */


  nameIsExist:boolean = false;
  emailIsExist:boolean = false;
  passwordIsExist:boolean = false;
  phoneIsExist:boolean = false;
  register:FormGroup;
  hide:boolean = true;


/* -------------------------------------------------------------------------- */
/*                                Contstructor                                */
/* -------------------------------------------------------------------------- */


  constructor(private fb:FormBuilder,
    private UsersService:usersService) { }


/* -------------------------------------------------------------------------- */
/*                             Ng OnInit LifeCycle                            */
/* -------------------------------------------------------------------------- */

=======
  register:FormGroup;
  constructor(private fb:FormBuilder) { }
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab

  ngOnInit(): void {
    this.register = this.fb.group({
      companyName:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      email:['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/)]],
      phone:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
<<<<<<< HEAD
    })

/* ------------------ Get All My Data And Set it To Company ----------------- */


    this.UsersService.getUser().subscribe(company =>{
      this.allUsers = company;
      console.log(this.allUsers)
    })
  }

/* -------------------------------------------------------------------------- */
/*                   Create Account And Check For validation                  */
/* -------------------------------------------------------------------------- */

  createAccount(AccountInfo){
    if(this.register.valid){
      this.UsersService.createUser(this.register.value);
=======
      companySize:['',Validators.required]
    })
  }
  createAccount(item){
    if(this.register.valid){
      console.log(item.value)
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab
    }else{
      console.log("not valid")
    }
  }
<<<<<<< HEAD
  
  onChangeName(){
    let checker = this.allUsers.some(value=>{
      return value.name === this.register.value.name
    })
    this.nameIsExist = checker
  }
  onChangeEmail(){
    let checker = this.allUsers.some(value=>{
      return value.email === this.register.value.email
    })
    this.emailIsExist = checker
  }
  onChangePhone(){
    let checker = this.allUsers.some(value=>{
      return value.phone === this.register.value.phone
    })
    this.phoneIsExist = checker
  }
=======
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab
}
