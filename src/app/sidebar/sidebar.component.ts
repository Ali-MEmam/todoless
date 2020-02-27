import { Component, OnInit } from '@angular/core';
import { ToggleasideService } from '../toggleaside.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarToggler:ToggleasideService) { }

  ngOnInit(): void {
    const aside = document.getElementsByClassName("aside")
    this.sidebarToggler.currentStatus.subscribe(arg =>{
      if(arg){
        aside[0].classList.add('return')
      }else{
        aside[0].classList.remove('return')

      }
    })
  }

}
