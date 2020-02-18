import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-developer-content',
  templateUrl: './developer-content.component.html',
  styleUrls: ['./developer-content.component.scss']
})
export class DeveloperContentComponent implements OnInit {
  todo = [
    {
      taskName : 'first task',
      taskTime : 1,
      finishedTime : 0 
    },
    {
      taskName : 'second task',
      taskTime : 2,
      finishedTime : 0
    },
    {
      taskName : 'third task',
      taskTime : 3,
      finishedTime : 0
    },
    {
      taskName : 'force task',
      taskTime : 4,
      finishedTime : 0
    }
  ];

  workingOn = [
    
  ];

  finished = [

  ];
  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer.id === 'cdk-drop-list-0' && event.container.id === 'cdk-drop-list-1') {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.dropCardTime =this.workingOn[0].taskTime -1 ;
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

  dropCardTime:number;
  result:string;
/* =============================
on init 
============================= */
ngOnInit(): any {
  for (let i = 0; i < this.todo.length; i++) {
    this.totalProjectTime = this.todo[i].taskTime + this.totalProjectTime;
  }

  
}
 /*======================
  task count down timer
  ======================*/

  dropCardSeconds:number = 0 ;
  dropCardMinnutes:number = 0 ;
  countdown(){
  
    this.result=this.dropCardTime.toString();
    
  this.start= setInterval(()=>{
    // convert time to string because if it is a number it wont appeare in DOM
   this.dropCardSeconds--;
    if(this.dropCardSeconds<0){
      this.dropCardSeconds=59;
      this.dropCardMinnutes--;
    }
    if(this.dropCardMinnutes<0){
      this.dropCardMinnutes=59;
      this.dropCardTime--;
    }
    if(this.dropCardTime==0&& this.dropCardMinnutes==0 && this.dropCardSeconds==0){
      clearInterval(this.start);
      this.deadline();
      
    }
    
  },1000);
}

//hadel deadLine
deadline(){
  //deadlinen
   this.start= setInterval(()=>{
     this.result='-'+this.dropCardTime.toString();
     this.dropCardSeconds++;
     if(this.dropCardSeconds>59){
       this.dropCardSeconds=0;
       this.dropCardMinnutes++;
     }
     if(this.dropCardMinnutes>59){
       this.dropCardMinnutes=0;
       this.dropCardTime++;
     }
   },1000);
 
 }
 

  /*======================
  pause task time
  ======================*/
  count: number  = 0 ; 
  handlePause() {
    this.count++
    if (this.count === 1) {
      this.dropCardTime ++;
    }
    if (this.status === 'pause') {
      this.status = 'resume';
      clearInterval(this.start);
      
    }
    else if (this.status === "resume") {
      if(this.result.indexOf('-')==-1){
        this.countdown();
       }else{
         this.deadline();
       }
       this.status = 'pause';
    }

  }

  /* ===================
  estemate time 
  =================== */


}
