import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';
import { projects } from '../modals/projects';
import { ProjectsService } from '../projects.service/projects.service';
import { CreateNewProjectComponent } from '../create-new-project/create-new-project.component';

@Component({
    selector: 'app-all-projects',
    templateUrl: './all-projects.component.html',
    styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
    ///////////////////////////////////
    //projects
    projects: projects[];
    projectlength: number;
    projectId: any;
    constructor(private ProjectsService: ProjectsService, public dialog: MatDialog) { }

    ngOnInit() {
        this.ProjectsService.getProject().subscribe((project: any) => {
            console.log(project)
            this.projects = project
        })
    }
    
  delete(event , project){
    this.ProjectsService.deleteProject(project);
    console.log(project)
    }
    //////////////////////////////////
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'right',
                        
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
    ///////////////////////////////
    //select project id
    selectProject(event, project) {
        this.projectId = project.id;
        this.ProjectsService.editProject(project);
        console.log(this.projectId)
    }

    /* ==================================== creat project popup ================================== */
  openDialog() {
    const dialogRef = this.dialog.open(CreateNewProjectComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}