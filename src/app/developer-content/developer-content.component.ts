import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { tasks } from '../modals/tasks';
import { TasksService } from '../tasks.service/tasks.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';
import { element } from 'protractor';

@Component({
  selector: 'app-developer-content',
  templateUrl: './developer-content.component.html',
  styleUrls: ['./developer-content.component.scss']
})
export class DeveloperContentComponent implements OnInit {
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
  splittedTimer: any;
 /*================================================
                     arrays
  ===============================================*/
  todo :tasks [];
  workingOn :tasks[];
  finished :tasks[];
  tasks=[];
  myObj ={
    finishedTaskTime:'',
  };
  workObj=[];

  constructor(private TasksService: TasksService) { }


 /*================================================
                     drop function
  ===============================================*/
  drop(event: CdkDragDrop<string[]>) {
if (this.workingOn.length === 0 ){
  if (event.previousContainer.id === 'cdk-drop-list-0' && event.container.id === 'cdk-drop-list-1') {
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
      
    // start hours and minutes initialization
    
    this.splittedTimer = this.workingOn[0].totalTime.split(':');
    this.dropCardTime = parseInt(this.splittedTimer[0]);
    this.dropCardMinnutes = parseInt(this.splittedTimer[1]);
    if (!this.splittedTimer[1]) {
      this.dropCardMinnutes = 0
    }
    this.workingOn[0].status = 'workingOn';


    // edit task status on firebase 
    // this.TasksService.editTaskStatus(this.workingOn[1] , this.workingOn[1].status) 
    console.log(event.currentIndex);


    // end hours and minutes initialization
    this.editStatus(this.workingOn[0]);
    this.disabledDrag = "true";
    this.handelBonusDelayTime();
    this.countdown();
  }
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
        this.finished.forEach((element)=>{
        element.status = 'finished';
        });
        
        
      //.element.nativeElement
      this.myObj.finishedTaskTime=this.result;
      this.tasks.push(this.myObj);
      this.editStatus(this.finished[0]);
    }
  }
  editStatus(item){
    this.TasksService.createTasks(item);
    this.TasksService.deleteTasks(item);
}
// editFinish(item){
//   console.log(item)
//   // this.TasksService.createTasks(item);
//   // this.TasksService.deleteTasks(item);
// }

  /* =============================
  on init 
  ============================= */
  ngOnInit(): any {
    this.TasksService.getTasks().subscribe((items : any) => {
      this.todo = items.filter(data=>data.status === 'pending');
      this.workingOn = items.filter(data=>data.status === 'workingOn');
      this.finished = items.filter(data=>data.status === 'finished');
      console.log(items);
      for (let i = 0; i < this.todo.length; i++) {
        this.totalProjectTime = this.todo[i].totalTime + this.totalProjectTime;
      }
    })
    // this.workingOn = this.TasksService.currentId.subscribe((message: any) =>  return message)
    
    // this.TasksService.currentId.subscribe((message: any) => {
    //   // this.workObj.push(message);
    //   // console.log(this.workObj);
    // })
  }



  /*======================
   task count down timer
   ======================*/


  dropCardSeconds: number = 0;
  dropCardMinnutes: number = 0;
  countdown() {
    this.start = setInterval(() => {
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
      this.result = this.dropCardTime.toString() + ":" + this.dropCardMinnutes + ":" + this.dropCardSeconds; // alternative solution instade of pipe
    }, 1000);
  }
  deadline() {
    this.start = setInterval(() => {
      this.dropCardSeconds++;
      if (this.dropCardSeconds > 59) {
        this.dropCardSeconds = 0;
        this.dropCardMinnutes++;
      }
      if (this.dropCardMinnutes > 59) {
        this.dropCardMinnutes = 0;
        this.dropCardTime++;
      }
      this.result = '-' + this.dropCardTime.toString() + ":" + this.dropCardMinnutes + ":" + this.dropCardSeconds; // alternative solution instade of pipe
    }, 1000);

  }

  /*======================
  pause task time
  ======================*/
  handlePause() {

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
  finishedTaskTime: any;
  bonusValue: any = 0;
  bonusValueHours: any = 0;
  bonusValueMinuts: any = 0;
  bonusValueSeconds: any = 0;
  delayValue: any = 0;
  calculatedTimeArr: any;
  handelBonusDelayTime() {
  }


}