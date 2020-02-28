import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { projects } from '../modals/projects';
import { ProjectsService } from '../projects.service/projects.service';
import { users } from '../modals/users';
import { usersService } from '../users.service/users.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit {

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


  constructor(private ProjectsService: ProjectsService,
    private fb: FormBuilder,
    private usersService: usersService) { }

  ngOnInit(): void {

    // !!!!!!!!!!!!!!--------------- declare Form AND Validators ---------------!!!!!!!!!!!!!!!!!

    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      id: '',
      privacy: ['', [Validators.required]],
      color: '',
      description: ['', [Validators.required]],
      attachment: ['', [Validators.required]],
      invitors: ['',[Validators.required, Validators.pattern(/^\w.+@[a-zA-Z]+.com$/)]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })

    // !!!!!!!!!!!!!!--------------- Get projects from firebase ---------------!!!!!!!!!!!!!!!!!

    this.ProjectsService.getProject().subscribe(items => {
      console.log(items);
      this.projects = items;
      this.projectsLength = items.length;
    })

    // !!!!!!!!!!!!!!--------------- Get Users from firebase ---------------!!!!!!!!!!!!!!!!!

    this.usersService.getUser().subscribe(items => {
      console.log(items);
      this.users = items;
      this.usersLength = items.length;
    })
  }

  // !!!!!!!!!!!!!!--------------- Select Color of project ---------------!!!!!!!!!!!!!!!!!

  SelectColor(event) { }


  // !!!!!!!!!!!!!!--------------- Select Id of UserInvited ---------------!!!!!!!!!!!!!!!!!

  selectUser(event, item) {
    this.invitors.push(item.id);
    console.log(this.invitors)
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
      this.projectForm.value.id = this.projectsLength;
      this.projectForm.value.attachment = this.file;
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
