import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
    selector: 'app-all-projects',
    templateUrl: './all-projects.component.html',
    styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
    public pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
            position: 'top',
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

    constructor() { }
    ngOnInit() { }
}
