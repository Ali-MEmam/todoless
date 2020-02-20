import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { projects } from '../modals/projects';
import { ProjectsService } from '../projects.service/projects.service';
import { users } from '../modals/users';
import { usersService } from '../users.service/users.service'


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit {
  projectForm:FormGroup;
  projects: projects[];
  users:users[];
  projectsLength;
  filterValue = "";
  usersLength;
  fileData: any;
  fileSrc: string | ArrayBuffer;
  file: any;

  constructor(private ProjectsService:ProjectsService,
              private fb:FormBuilder,
              private usersService:usersService) { }

  ngOnInit(): void {

    this.projectForm = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      id:this.projectsLength,
      privacy:['',[Validators.required]],
      color:'',
      description:['',[Validators.required]],
      attachment:'',
      invitors:'',
      startDate:'',
      endDate:'',
    })

    this.ProjectsService.getProject().subscribe(items=>{
      // console.log(items.length);
      this.projects = items;
      this.projectsLength = items.length;
    })
    

    this.usersService.getUser().subscribe(items=>{
      console.log(items);
      this.usersLength = items.length;
      this.users = items;
    })
    
  }

  SelectColor(event){}
  readURL(event: any) {
    this.fileData = <File>event.target.files[0];
    console.log(this.fileData);
    this.preview();
  }

  preview() {
    let mimeType = this.fileData.type;
    if (mimeType.match(/image||text\/*/) == null)  {
      return;
    }
  
    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = event => {
      this.fileSrc = reader.result;
      this.file = reader.result;
      this.projectForm.value.attachment = this.file;
      console.log(this.projectForm.value.attachment) ;
    };
  }

  createProject(projectForm:FormGroup){
    if (projectForm.valid) {      
      console.log("valid");
      console.log(this.projectForm.value);
      // this.ProjectsService.createProject(this.projectForm.value);
      // this.item.name = this.item.email = this.item.password = this.item.role = "";
    }else{
      console.log("Not Vaild")
    }

  }

}
