import { projects } from './../modals/projects';
import { Component, OnInit } from '@angular/core';
// import { rotateInDownLeftAnimation } from 'angular-animations';
import { RouterOutlet } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    // rotateInDownLeftAnimation()
  ]
})
export class ProjectDetailsComponent implements OnInit {


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
    endDate :'2/2/2020',
    privacy :'public'
  }

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(EditProjectComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  
  ngOnInit(): void {
  }

}
