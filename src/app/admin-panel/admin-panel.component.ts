import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { usersService } from "../users.service/users.service";
import { users } from "../modals/users";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  item: any = {
    password: '',
    role: '',
    email: '',
    name: ''
  }
  
  users: users[];
  editState:boolean=false;
  itemtoEdit:users;
  filterValue = "";
  itemLength;

  myForm: FormGroup;

  constructor(private usersService: usersService,
              private fb:FormBuilder) { }

  ngOnInit(): any {
   
    this.myForm = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      email:['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/)]],
      role:['',Validators.required]
    })

    
    this.usersService.getUser().subscribe(items=>{
      console.log(items);
      this.users = items;
      this.itemLength = this.users.length;
    })
    
    this.usersService.currentId.subscribe((message: any) => {
      this.item.name = message.name;
      // this.item.role = message.role;
      this.item.password = message.password;
      this.item.email = message.email;
    })
  }

  //function-subbmit-to-create-user-object
  onSubmit(form: FormGroup) {
    if (form.valid) {      
      console.log("valid")  
      this.usersService.createUser(this.item);
      this.item.name = this.item.email = this.item.password = this.item.role = "";
    }
  }

  
  //delete-user
  deleteUser(event,item) {
    this.usersService.deleteUser(item);
  }
  
  //edit-user 
  editUser(event,item) {
    this.editState = true;
    this.itemtoEdit = item;
    this.usersService.editUser(item);
    this.deleteUser(event,item);
  }

}
