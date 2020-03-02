import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TasksService } from '../tasks.service/tasks.service';
import { tasks } from './../modals/tasks';

>>>>>>> blue

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

=======
  task:tasks;

  constructor(private TasksService :TasksService ) { }

  ngOnInit(): void {
    // this.TasksService.getTasks().subscribe(items=>{
    //   console.log(items);
    //   this.task = items;
    // })
    this.TasksService.currentId.subscribe((message: any) => {
      // console.log(message);
      this.task=message;
    })

  }



>>>>>>> blue
}
