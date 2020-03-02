<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}
=======
import { users } from './../modals/users';
import { projects } from './../modals/projects';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ProjectsService} from'../projects.service/projects.service';
import {usersService} from'../users.service/users.service';
import { DataSource } from '@angular/cdk/collections';



>>>>>>> blue
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
<<<<<<< HEAD

  project = {
    id:'',
    ownerId : '',
    tasksId :'',
    invitors :'',
    name :'TO DO LESS',
    description : 'this project is very important to us because it is the final project , and we were stucked in it until the UI team went to hell . fa rbna yostr. ',
    image :'',
    color :'',
    startDate : '2/2/2020',
    endDate :'2/6/2020',
    privacy :'public'
  }
  myControl = new FormControl();
  options: User[] = [
    {name: 'Ali Emam'},
    {name: 'Mai Mohamed'},
    {name: 'Omnia Ahmed'},
    {name: 'Nada Yousry'},
    {name: 'Mohamed Elsaeid'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
=======
  
  constructor(private ProjectsService: ProjectsService,
    private fb: FormBuilder,
     private usersService : usersService) { }
     editform: FormGroup;

  myControl = new FormControl();
  options: users[];
  filteredOptions: Observable<users[]>;
  project:projects;

  ngOnInit() {

    this.ProjectsService.currentId.subscribe((message: any) => {
      this.project = message;
     })
     this.editform = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      privacy: ['', [Validators.required]],
      description: ['', [Validators.required]],
      attachment: ['', [Validators.required]],
      invitors: ['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })

    this.usersService.getUser().subscribe(items=>{
      this.options = items;
      console.log(this.options);
    })

>>>>>>> blue
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
<<<<<<< HEAD
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
=======

     

  }

  displayFn(user: users): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): users[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  editProject(editform:FormGroup){
    this.ProjectsService.editProject(this.project);
    this.editform.value.id = this.project.id
    console.log(this.editform.value)



  }
>>>>>>> blue

}
