import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {CompanyService} from './../company.service/company.service';
import {company} from './../modals/company';
import {users} from './../modals/users';
import {usersService} from './../users.service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


/* ------------------------------- Get MyData ------------------------------- */

  allCompanies:users[];

/* ---------------- Check For Email To Display specific error --------------- */


  emailIsExist:boolean = false;
  passwordIsExist:boolean = false;
  phoneIsExist:boolean = false;
  register:FormGroup;


/* -------------------------------------------------------------------------- */
/*                                Contstructor                                */
/* -------------------------------------------------------------------------- */


  constructor(private fb:FormBuilder,
    private UsersService:usersService) { }


/* -------------------------------------------------------------------------- */
/*                             Ng OnInit LifeCycle                            */
/* -------------------------------------------------------------------------- */


  ngOnInit(): void {
    this.register = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      email:['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/)]],
      phone:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
    })

/* ------------------ Get All My Data And Set it To Company ----------------- */


    this.UsersService.getUser().subscribe(company =>{
      this.allCompanies = company;
      console.log(this.allCompanies)
    })
  }

/* -------------------------------------------------------------------------- */
/*                   Create Account And Check For validation                  */
/* -------------------------------------------------------------------------- */

  createAccount(AccountInfo){
    if(this.register.valid){
      this.UsersService.createUser(this.register.value)
    }else{
      console.log("not valid")
    }
  }
  

  onChangeEmail(){
    let checker = this.allCompanies.some(value=>{
      return value.email === this.register.value.email
    })
    this.emailIsExist = checker
  }
  onChangePhone(){
    let checker = this.allCompanies.some(value=>{
      return value.phone === this.register.value.phone
    })
    this.phoneIsExist = checker
  }
}
