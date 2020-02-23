import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { tasks } from '../modals/tasks';
import { TasksService } from '../tasks.service/tasks.service';
import { FormBuilder, FormGroup } from '@angular/forms';


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
  todo: tasks[];
  workingOn = [];
  finished = [];
  tasks=[];
  myObj ={
    finishedTaskTime:'',
  }

  constructor(private TasksService: TasksService) { }


 /*================================================
                     drop function
  ===============================================*/
  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer.id === 'cdk-drop-list-0' && event.container.id === 'cdk-drop-list-1') {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      // start hours and minutes initialization
      this.splittedTimer = this.workingOn[0].time.split(':');
      this.dropCardTime = parseInt(this.splittedTimer[0]);
      this.dropCardMinnutes = parseInt(this.splittedTimer[1]);
      if (!this.splittedTimer[1]) {
        this.dropCardMinnutes = 0
      }
      // end hours and minutes initialization
      
      this.disabledDrag = "true";
      this.handelBonusDelayTime();
      this.countdown();
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
      //.element.nativeElement
      console.log(event.container.data);
      console.log(event.container.element.nativeElement);
      this.myObj.finishedTaskTime=this.result;
      this.tasks.push(this.myObj);
      console.log(this.result);
      console.log(this.myObj);
      console.log(this.tasks);
      
      
    }
  }


  /* =============================
  on init 
  ============================= */
  ngOnInit(): any {
    this.TasksService.getTasks().subscribe(items => {
      console.log(items);
      this.todo = items;
      for (let i = 0; i < this.todo.length; i++) {
        this.totalProjectTime = this.todo[i].totalTime + this.totalProjectTime;
      }
    })

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
<<<<<<< HEAD
    console.log(this.result);
    // this.calculatedTimeArr = (this.finishedTaskTime).split(":");
    // console.log(parseFloat(this.calculatedTimeArr[0]), parseInt(this.calculatedTimeArr[0]));
    // if (parseFloat(this.calculatedTimeArr[0]) === parseInt(this.calculatedTimeArr[0])) { 
    //   this.bonusValueHours = parseFloat(this.calculatedTimeArr[0]) + this.bonusValueHours;
    //   this.bonusValueMinuts = parseFloat(this.calculatedTimeArr[1]) + this.bonusValueMinuts;
    //   this.bonusValueSeconds = parseFloat(this.calculatedTimeArr[2]) + this.bonusValueSeconds;
    //   this.bonusValue = this.bonusValueHours + ":" + this.bonusValueMinuts + ":" + this.bonusValueSeconds;
    // }
    // else {
    //   this.delayValue = this.delayValue + this.finishedTaskTime.innerHTML
    // }
    // this.calculatedTimeArr = (this.finishedTaskTime).split(":");
    // console.log(parseFloat(this.calculatedTimeArr[0]), parseInt(this.calculatedTimeArr[0]));
    // if (parseFloat(this.calculatedTimeArr[0]) === parseInt(this.calculatedTimeArr[0])) {
    //   this.bonusValueHours = parseFloat(this.calculatedTimeArr[0]) + this.bonusValueHours;
    //   this.bonusValueMinuts = parseFloat(this.calculatedTimeArr[1]) + this.bonusValueMinuts;
    //   this.bonusValueSeconds = parseFloat(this.calculatedTimeArr[2]) + this.bonusValueSeconds;
    //   this.bonusValue = this.bonusValueHours + ":" + this.bonusValueMinuts + ":" + this.bonusValueSeconds;
    // }
    // else {
    //   this.delayValue = this.delayValue + this.finishedTaskTime.innerHTML
    // }
=======
    // this.finishedTaskTime = (event.target.childNodes[0].innerHTML);
    this.calculatedTimeArr = (this.finishedTaskTime).split(":");
    console.log(parseFloat(this.calculatedTimeArr[0]), parseInt(this.calculatedTimeArr[0]));
    if (parseFloat(this.calculatedTimeArr[0]) === parseInt(this.calculatedTimeArr[0])) { 
      this.bonusValueHours = parseFloat(this.calculatedTimeArr[0]) + this.bonusValueHours;
      this.bonusValueMinuts = parseFloat(this.calculatedTimeArr[1]) + this.bonusValueMinuts;
      this.bonusValueSeconds = parseFloat(this.calculatedTimeArr[2]) + this.bonusValueSeconds;
      this.bonusValue = this.bonusValueHours + ":" + this.bonusValueMinuts + ":" + this.bonusValueSeconds;
    }
    else {
      this.delayValue = this.delayValue + this.finishedTaskTime.innerHTML
    }
>>>>>>> 1f386c4098f50d4a6b103043a9b18976c992144e
  }


}