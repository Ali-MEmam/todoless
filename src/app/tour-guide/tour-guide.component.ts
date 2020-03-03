import { Component, OnInit } from '@angular/core';
import * as introJs from 'intro.js/intro.js';     //import tour
@Component({
  selector: 'app-tour-guide',
  templateUrl: './tour-guide.component.html',
  styleUrls: ['./tour-guide.component.scss']
})
export class TourGuideComponent implements OnInit {
  introJS = introJs();                     //init tour
  constructor() {
     //constructor tour
     this.introJS.setOptions({
      steps: [
        { 
          intro: "Hello to do less"
        },
        {
          element: document.querySelector('#step1'),
          position: 'left',
          intro: "sign up or login to continue"
        },
        {
          element: document.querySelectorAll('#step2')[0],
          intro: "sign up ",
          position: 'right'
        },
        {
          element: '#step3',
          intro: 'create project',
          position: 'left'
        },
        {
          element: '#step4',
          intro: 'pending tasks',
          position: 'left'
        },
        {
          element: '#step5',
          intro: 'working on tasks',
          position: 'left'
        },
        {
          element: '#step6',
          intro: 'finished tasks',
          position: 'left'
        },
        {
          element: '#step7',
          intro: 'create task',
          position: 'left'
        },
        {
          element: '#step8',
          intro: 'task card',
          position: 'left'
        },
        {
          element: '#step9',
          intro: 'friends tabs',
          position: 'left'
        },
        {
          element: '#step10',
          intro: 'my friends',
          position: 'left'
        },
      ]
    });
   }

  ngOnInit(): void {
    introJs().start();       //tour guide
  }

}
