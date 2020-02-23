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
    totalTime: '',
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
      totalTime: '',
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
      this.item.totalTime = message.totalTime;
      this.item.employeeId = message.employeeId;
      this.item.deadLine = message.deadLine;
      this.item.startDate = message.startDate;
      this.item.status = message.status;
    })

    // task code
    /* for (let i = 0; i < this.todo.length; i++) {
      this.totalProjectTime = this.todo[i].totalTime + this.totalProjectTime;
    } */
    // for (let i = 0; i < this.todo.length; i++) {
    //   this.totalProjectTime = this.todo[i].totalTime + this.totalProjectTime;
    // }
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
    //  const create((item: Item)=>{
    //     this.itemService.createPolicy(item)
    //   });
    // let fromValue =this.taskForm.value;
    // console.log(fromValue);
    // console.log(fromValue.name); 
    // console.log(fromValue.descrption); 
    // console.log(fromValue.time); 
    // this.createNewTask();
    // this.taskObj.taskName=fromValue.name
    // this.taskObj.taskDescription=fromValue.descrption ;
    // this.taskObj.taskTime =fromValue.time;
    // this.taskObj.employeeId=fromValue.employeeId;
    // this.todo.push(this.taskObj);
  }
  // createNewTask() {
    //  this.taskObj={
    //     taskId:'' ,
    //     taskName: '',
    //     taskStatus: '',
    //     taskDescription: '',
    //     taskTime:'',
    //     finishedTime: '',
    //     projectId: '',
    //     employeeId: ''
    // }  
  // }


  title = 'to-do-less';

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer.id === 'cdk-drop-list-0' && event.container.id === 'cdk-drop-list-1') {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.dropCardTime = this.workingOn[0].taskTime - 1;
      this.disabledDrag = "true";
      this.countdown()

    }
    if (event.previousContainer.id === 'cdk-drop-list-1' && event.container.id === 'cdk-drop-list-2') {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      clearInterval(this.start);
      this.dropCardSeconds = 0;
      this.dropCardMinnutes = 0;
      this.disabledDrag = "false";
      this.count = 0;
    }


  }

  /*================================================
                      variables
   ===============================================*/
  totalProjectTime: number = 0;             //sum of all tasks time
  disabledDrag: string = "false";           //default value for card is draggable
  desabledDrop: string = "false";           //default value for section is droppable
  status = 'pause';                         //default status for working on task button
  taskCountresult: number;                 //task count result
  start: any;                             //start timer
  dropCardTime: number;
  result: string;
  /* =============================
  on init 
  ============================= */

  /*======================
   task count down timer
   ======================*/

  dropCardSeconds: number = 0;
  dropCardMinnutes: number = 0;
  countdown() {
    this.start = setInterval(() => {
      // convert time to string because if it is a number it wont appeare in DOM
      this.dropCardSeconds--;
      if (this.dropCardSeconds < 0) {
        this.dropCardSeconds = 59;
        this.dropCardMinnutes--;
      }
      if (this.dropCardMinnutes < 0) {
        this.dropCardMinnutes = 59;
        this.dropCardTime--;
      }
      if (this.dropCardTime == 0 && this.dropCardMinnutes == 0 && this.dropCardSeconds == 0) {
        clearInterval(this.start);
        this.deadline();
      }
    }, 1000);

    this.result = this.dropCardTime.toString();

  }

  //hadel deadLine
  deadline() {
    //deadlinen
    this.start = setInterval(() => {
      this.result = '-' + this.dropCardTime.toString();
      this.dropCardSeconds++;
      if (this.dropCardSeconds > 59) {
        this.dropCardSeconds = 0;
        this.dropCardMinnutes++;
      }
      if (this.dropCardMinnutes > 59) {
        this.dropCardMinnutes = 0;
        this.dropCardTime++;
      }
    }, 1000);

  }


  /*======================
  pause task time
  ======================*/
  count: number = 0;
  handlePause() {
    this.count++
    if (this.count === 1) {
      this.dropCardTime++;
    }
    if (this.status === 'pause') {
      this.status = 'resume';
      clearInterval(this.start);
    }
    else if (this.status === "resume") {
      if (this.result.indexOf('-') == -1) {
        this.countdown();
      } else {
        this.deadline();
      }
      this.status = 'pause';
    }
  }
  /* ===================
  estemate time 
  =================== */
}
