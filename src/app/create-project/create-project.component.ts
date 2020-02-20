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
  projectsLength;
  users: users[];
  filterValue = "";
  usersLength;

  constructor(private ProjectsService:ProjectsService,
              private fb:FormBuilder,
              private usersService:usersService) { }

  ngOnInit(): void {

    this.projectForm = this.fb.group({
      name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]{3,}/)]],
      id:['',[Validators.required]],
      privacy:['',[Validators.required]],
      color:[''],
      description:['',[Validators.required]],
      attachment:[''],
      invitors:'',
      startDate:'',
      endDate:'',
      filterValue:this.filterValue,
    })

    this.ProjectsService.getProject().subscribe(items=>{
      // console.log(items.length);
      // this.projects = items;
      this.projectsLength = items.length;
    })
    

    this.usersService.getUser().subscribe(items=>{
      console.log(items);
      this.usersLength = items.length;
      this.users = items;
    })
  }
  createProject(){}
  SelectColor(event){}

   encodeImageFileAsURL(event,element) {
    let file = element.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
  }
 
}
