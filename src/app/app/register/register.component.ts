import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.register = this.fb.group({
      companyName:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      email:['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/)]],
      phone:['',[Validators.required, Validators.pattern(/^[0-9]{8,}$/)]],
      companySize:['',Validators.required]
    })
  }
  createAccount(item){
    if(this.register.valid){
      console.log(item.value)
    }else{
      console.log("not valid")
    }
  }
}
