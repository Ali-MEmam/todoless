import { users } from './../modals/users';
import { projects } from './../modals/projects';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ProjectsService} from'../projects.service/projects.service';
import {usersService} from'../users.service/users.service';
import { DataSource } from '@angular/cdk/collections';
import { ProjectDisplayService } from '../project-display.service';



@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  
  
     editform: FormGroup;
     projects: projects[];
     users: users[];
  myControl = new FormControl();
  options: users[];
  filteredOptions: Observable<users[]>;
  project:projects;
  assign: users[] = [];

  constructor(private ProjectsService: ProjectsService,
    private fb: FormBuilder,
     private usersService : usersService,
     private currentProject:ProjectDisplayService) { }

  ngOnInit() {

    // this.ProjectsService.currentId.subscribe((message: any) => {
    //   this.project = message;
    //  })
     this.currentProject.currentProject.subscribe(arg =>{
      this.project = arg
     })
     this.editform = this.fb.group({
      name: [this.project.name, [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      privacy: [this.project.privacy, [Validators.required]],
      description: [this.project.description, [Validators.required]],
      attachment: ['', [Validators.required]],
      invitors: [this.project.invitors,[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      startDate: [this.project.startDate, [Validators.required]],
      endDate: [this.project.endDate, [Validators.required]]
    })

    this.usersService.getUser().subscribe(items=>{
      items.map((data: any)=>{
        this.assign.push(data);
      })
      console.log(this.assign) 
    })  

    this.usersService.getUser().subscribe(items=>{
      this.options = items;
      console.log(this.options);
    })

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

     

  }

  displayFn(user: users): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): users[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  editProject(editform: FormGroup){
    /* this.ProjectsService.editProject(this.editform);
    this.editform.value.id = this.project.id
    console.log(this.editform.value) */
    console.log(this.editform.value)
    if (editform.valid) {
      /* this.invitors.push(this.editform.value.invitors);
      this.editform.value.invitors = this.invitors;  */ 
      console.log("valid");
      console.log(this.editform.value);
      this.ProjectsService.createProject(this.editform.value);
    } else {
      console.log("Not Vaild")
    }


  }

}
