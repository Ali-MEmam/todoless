import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from "../employees.service/employees.service";
import { employees } from "../modals/employees";

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
  
  employees: employees[];
  editState:boolean=false;
  itemtoEdit:employees;
  filterValue = "";
  itemLength;

  myForm: FormGroup;

  constructor(private employeesService: EmployeesService,
              private fb:FormBuilder) { }

  ngOnInit(): any {
   
    this.myForm = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      email:['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      password:['',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/)]],
      role:['',Validators.required]
    })

    
    this.employeesService.getEmp().subscribe(items=>{
      console.log(items);
      this.employees = items;
      this.itemLength = this.employees.length;
    })
    
    this.employeesService.currentId.subscribe((message: any) => {
      this.item.name = message.name;
      this.item.role = message.role;
      this.item.password = message.password;
      this.item.email = message.email;
    })
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {      
      console.log("valid")  
      this.employeesService.createEmp(this.item);
      this.item.name = this.item.email = this.item.password = this.item.role = "";
    }
  }

  
  
  deleteEmp(event,item) {
    this.employeesService.deleteEmp(item);
  }
  
  editEmp(event,item) {
    this.editState = true;
    this.itemtoEdit = item;
    this.employeesService.editEmp(item);
    this.deleteEmp(event,item);
  }

}
