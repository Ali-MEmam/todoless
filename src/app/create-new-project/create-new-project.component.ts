import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { projects } from '../modals/projects';
import { ProjectsService } from '../projects.service/projects.service';
import { users } from '../modals/users';
import { usersService } from '../users.service/users.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-create-new-project',
  templateUrl: './create-new-project.component.html',
  styleUrls: ['./create-new-project.component.scss']
})
export class CreateNewProjectComponent implements OnInit {

   // !!!!!!!!!!!!!!--------------- Declartion && Intialization ---------------!!!!!!!!!!!!!!!!!

   projectForm: FormGroup;
   projects: projects[];
   users: users[];
   projectsLength;
   filterValue = "";
   usersLength;
   fileData: any;
   fileSrc: string | ArrayBuffer;
   file: any;
   invitors = [];

  myControl = new FormControl();
  options: User[] = [
    {name: 'Ali Emam'},
    {name: 'Mai Mohamed'},
    {name: 'Omnia Ahmed'},
    {name: 'Nada Yousry'},
    {name: 'Mohamed Elsaeid'}
  ];
  filteredOptions: Observable<User[]>;


  constructor(private ProjectsService: ProjectsService,
    private fb: FormBuilder,
    private usersService: usersService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

        // !!!!!!!!!!!!!!--------------- declare Form AND Validators ---------------!!!!!!!!!!!!!!!!!

    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      privacy: ['', [Validators.required]],
      description: ['', [Validators.required]],
      attachment: ['', [Validators.required]],
      invitors: ['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],id:'',
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })

    // !!!!!!!!!!!!!!--------------- Get projects from firebase ---------------!!!!!!!!!!!!!!!!!

    this.ProjectsService.getProject().subscribe(items => {
      this.projects = items;
      this.projectsLength = items.length;
      console.log(items)
    })

    // !!!!!!!!!!!!!!--------------- Get Users from firebase ---------------!!!!!!!!!!!!!!!!!

    this.usersService.getUser().subscribe(items => {
      this.users = items;
      this.usersLength = items.length;
    })


  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


  // !!!!!!!!!!!!!!--------------- Select Id of UserInvited ---------------!!!!!!!!!!!!!!!!!

  selectUser(event, item) {
    this.invitors.push(item);
    // console.log(this.invitors);
  }

  // !!!!!!!!!!!!!!--------------- Attachment image or text to string---------------!!!!!!!!!!!!!!!!!

  readURL(event: any) {
    this.fileData = <File>event.target.files[0];
    console.log(this.fileData);
    this.preview();
  }

  preview() {
    let mimeType = this.fileData.type;
    if (mimeType.match(/image||text\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = event => {
      this.fileSrc = reader.result;
      this.file = reader.result;
      this.projectForm.value.attachment = this.file;
      // console.log(this.projectForm.value.attachment) ;
    };
  }

  // !!!!!!!!!!!!!!--------------- Create Project and send object to firebase ---------------!!!!!!!!!!!!!!!!!

  createProject(projectForm: FormGroup) {
    
    if (projectForm.valid) {
      this.invitors.push(this.projectForm.value.invitors);
      this.projectForm.value.invitors = this.invitors;  
      console.log("valid");
      console.log(this.projectForm.value);
      
      this.ProjectsService.createProject(this.projectForm.value);
    } else {
      console.log("Not Vaild")
    }
  }
  labelUp(event,element){
    element.classList.add("up")
  }
  labelDown($event,element){
    element.classList.remove("up")
  }
}
