import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../tasks.service/tasks.service';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { tasks } from '../modals/tasks';

=======
>>>>>>> mohamed
import { usersService } from '../users.service/users.service';

import { tasks } from '../modals/tasks';
import { users } from '../modals/users';
<<<<<<< HEAD

=======
export interface User {
  name: string;
}
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
@Component({
  selector: 'app-drag-timer',
  templateUrl: './drag-timer.component.html',
  styleUrls: ['./drag-timer.component.css']
})
export class DragTimerComponent implements OnInit {
  item: any = {
    name: '',
<<<<<<< HEAD
=======
<<<<<<< HEAD
    descrption: '',
    time: '',
    employeeId: '',
    deadLine: '',
    startDate: '',
    status:""
=======
>>>>>>> mohamed
    description: '',
    totalTime: '',
    personId: '',
    startDate: '',
    endDate: '',
    status:'',
    assignTo:'',
    attachment:'',
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
  }

  //all arrays and vars
  editState:boolean=false;
  itemtoEdit:tasks;
  
  todo: tasks[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
  taskForm: FormGroup;

  constructor(private f: FormBuilder, private TasksService: TasksService) { }
=======
>>>>>>> mohamed

  workingOn = [

  ];

  finished = [];
  taskForm: FormGroup;
  usersLength;
  filedate: any;
  fileSrc: string | ArrayBuffer;
  file: any;

  constructor(private f: FormBuilder, private TasksService: TasksService, private usersService:usersService) { }
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
  // form to add new task


  ngOnInit(): any {
    this.taskForm = this.f.group({
      name: '',
<<<<<<< HEAD
=======
<<<<<<< HEAD
      descrption: '',
      time: '',
      employeeId: '',
      deadLine: '',
      startDate:'',
      status:''
=======
>>>>>>> mohamed
      description: '',
      totalTime: '',
      personId: '',
      startDate: '',
      endDate: '', 
      status:'',
      assignTo:'',
      attachment:'',
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
    });

    this.TasksService.getTasks().subscribe(item =>{
      this.todo = item;
      console.log(item);
    })
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> mohamed
    this.usersService.getUser().subscribe(items => {
      console.log(items);
      // this.users = items;
      this.usersLength = items.length;
    })
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed

    this.TasksService.currentId.subscribe((message:any)=>{
      this.item.name = message.name;
      this.item.descrption = message.descrption;
<<<<<<< HEAD
=======
<<<<<<< HEAD
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


=======
>>>>>>> mohamed
      this.item.totalTime = message.totalTime;
      this.item.personId = message.personId;
      this.item.endDate = message.endDate;
      this.item.startDate = message.startDate;
      this.item.status = message.status;
    })
  }


  readURL(event: any) {
    this.filedate = <File>event.target.files[0];
    console.log(this.filedate);
    this.preview();
  }

  preview() {
    let mimeType = this.filedate.type;
    if (mimeType.match(/image||text\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.filedate);
    reader.onload = event => {
      this.fileSrc = reader.result;
      this.file = reader.result;
      this.taskForm.value.attachment = this.file;
      // console.log(this.projectForm.value.attachment) ;
    };
  }
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> mohamed
    if (form.valid){
      this.taskForm.value.attachment = this.file;
      this.assignTo.push(this.taskForm.value.assignTo);
      this.taskForm.value.assignTo = this.assignTo;  
      console.log("valid");
      console.log(this.taskForm.value);
      this.TasksService.createTasks(this.taskForm.value);
      this.item.name = this.item.descrption = 
      this.item.time =this.item.startDate =this.item.employeeId =
      this.item.deadLine = "";
      this.item.status ='';
    }
  }

<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed


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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> mohamed
  assignTo=[];
  users:users[];
  selectUser(event, item) {
    this.assignTo.push(item.id);
    console.log(this.assignTo)
  }
<<<<<<< HEAD
=======
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed

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
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======
}
>>>>>>> 0c2825a7a9a0d7acc6ae34ba0b9700d8bf1eef71
>>>>>>> mohamed
