import { Component, OnInit, TemplateRef } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { projects } from '../modals/projects';
import { ProjectsService } from '../projects.service/projects.service';
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
    constructor(private ProjectsService: ProjectsService,) { }
    ngOnInit() {
        this.ProjectsService.getProject().subscribe((project: any) => {
            console.log(project)
            this.projects = project
        })
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
            backgroundColor: ['#d62676', '#00ca5d', '#2ca6ef'],

        },
    ];
    ///////////////////////////////
    //select project id
    selectProject(event, project) {
        this.projectId = project.id;
        console.log(this.projectId)
    }

}