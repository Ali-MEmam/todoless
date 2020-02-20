import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service/tasks.service';
import { tasks } from '../modals/tasks';

@Component({
  selector: 'app-drag-timer',
  templateUrl: './drag-timer.component.html',
  styleUrls: ['./drag-timer.component.css']
})
export class DragTimerComponent implements OnInit {
  item: any = {
    name: '',
    descrption: '',
    time: '',
    employeeId: '',
    deadLine: '',
    startDate: '',
    status:""
  }

  //all arrays and vars
  editState:boolean=false;
  itemtoEdit:tasks;
  
  todo: tasks[];

  workingOn = [

  ];

  finished = [];
  taskForm: FormGroup;

  constructor(private f: FormBuilder, private TasksService: TasksService) { }
  // form to add new task


  ngOnInit(): any {
    this.taskForm = this.f.group({
      name: '',
      descrption: '',
      time: '',
      employeeId: '',
      deadLine: '',
      startDate:'',
      status:''
    });

    this.TasksService.getTasks().subscribe(item =>{
      this.todo = item;
    })

    this.TasksService.currentId.subscribe((message:any)=>{
      this.item.name = message.name;
      this.item.descrption = message.descrption;
      this.item.time = message.time;
      this.item.employeeId = message.employeeId;
      this.item.deadLine = message.deadLine;
      this.item.startDate = message.startDate;
      this.item.status = message.status;
    })

    // task code
    for (let i = 0; i < this.todo.length; i++) {
      this.totalProjectTime = this.todo[i].totalTime + this.totalProjectTime;
    }
  }


  taskObj;
  
  deleteTask(event,item) {
    this.TasksService.deleteTasks(item);
  }
  
  editTask(event,item) {
    this.editState = true;
    this.itemtoEdit =  item;
    this.TasksService.editTasks(item);
    this.deleteTask(event,item);
  }
  onSubmit(form:FormGroup) {
    this.TasksService.createTasks(this.taskForm.value);
    this.TasksService.getTasks();
    this.item.name = this.item.descrption = 
    this.item.time =this.item.startDate =this.item.employeeId =
    this.item.deadLine = "";
    this.item.status ='';

  }


  title = 'to-do-less';

  /*================================================
                      variables
   ===============================================*/
  totalProjectTime: number = 0;             //sum of all tasks time 
}
