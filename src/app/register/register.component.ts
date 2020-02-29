import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {users} from './../modals/users';
import {usersService} from './../users.service/users.service';


=======
>>>>>>> mohamed

import {users} from './../modals/users';
import {usersService} from './../users.service/users.service';

<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


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

<<<<<<< HEAD
=======
<<<<<<< HEAD
  register:FormGroup;
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed

  ngOnInit(): void {
    this.register = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      email:['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/)]],
      phone:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      companySize:['',Validators.required]
    })
  }
  createAccount(item){
    if(this.register.valid){
      console.log(item.value)
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
    }else{
      console.log("not valid")
    }
  }
  
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> mohamed
  
  labelUp(event,labelId){
    labelId.classList.add('labelFocus');
    
  }
  labelDown(event,labelId){
    if(event.target.value === ""){
      labelId.classList.remove("labelFocus");
    }else{
      labelId.classList.add('labelFocus');
    }
  }
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed

}
