<<<<<<< HEAD
=======
import { ProjectsService } from './../projects.service/projects.service';
>>>>>>> blue
import { projects } from './../modals/projects';
import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
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

  /* ==================================== edit project popup ================================== */
  constructor(public dialog: MatDialog) { }
=======

  project;

  /* ==================================== edit project popup ================================== */
  constructor(public dialog: MatDialog, private ProjectsService:ProjectsService) { }
>>>>>>> blue
  openDialog() {
    const dialogRef = this.dialog.open(EditProjectComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
  /* ======================================= chart========================================== */
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
<<<<<<< HEAD
        position: 'right',
=======
        position: 'right', 
>>>>>>> blue
                    
    },
    plugins: {
        datalabels: {
            formatter: (value, ctx) => {
                const label = ctx.chart.data.labels[ctx.dataIndex];
                return label;
            },
        },
    }
};
public pieChartLabels: Label[] = ['pending tasks', 'bonus', 'delay'];
public pieChartData: number[] = [300, 500, 100];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartColors = [
    {
        backgroundColor: ['rgba(247,149,99,1)', 'rgba(0,171,178,1)', 'rgba(216,70,114,1)'],
    },
];
  
  ngOnInit(): void {
<<<<<<< HEAD
=======
 this.ProjectsService.currentId.subscribe((message: any) => {
     console.log(message)
     this.project = message;
    })
>>>>>>> blue
  }

}
