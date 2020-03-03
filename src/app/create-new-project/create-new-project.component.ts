import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { projects } from '../modals/projects';
import { ProjectsService } from '../projects.service/projects.service';
import { users } from '../modals/users';
import { usersService } from '../users.service/users.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


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
   filterValue = "";
   usersLength;
   fileData: any;
   fileSrc: string | ArrayBuffer;
   file: any;
   invitors = [];
  
   myControl = new FormControl();
  assign: users[] = [];
  filteredOptions: Observable<users[]>;



  constructor(private ProjectsService: ProjectsService,
    private fb: FormBuilder,
    private usersService: usersService) { }

  ngOnInit() {
    this.ProjectsService.getProject().subscribe(items => {
      this.projects = items;
      console.log(items)
    })
    
    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      privacy: '',
      description: '',
      attachment: '',
      invitors: ['',[Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      startDate: '',
      endDate: ''
    })

    this.usersService.getUser().subscribe(items=>{
      items.map((data: any)=>{
        this.assign.push(data);
      })
      console.log(this.assign) 
    })  


    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.email),
      map(email => email ? this._filter(email) : this.assign.slice())
    );


  }


  displayFn(user: users): string {
    return user && user.email ? user.email : '';
  }

  private _filter(email: string): users[] {
    const filterValue = email.toLowerCase();

    return this.assign.filter(option => option.email.toLowerCase().indexOf(filterValue) === 0);
  }


  // !!!!!!!!!!!!!!--------------- Select Id of UserInvited ---------------!!!!!!!!!!!!!!!!!

  selectUser(event, item) {
    this.invitors.push(item);
    console.log(item);
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
