import { Component, OnInit } from '@angular/core';
import { ToggleasideService } from '../toggleaside.service';

@Component({
  selector: 'app-account-navbar',
  templateUrl: './account-navbar.component.html',
  styleUrls: ['./account-navbar.component.scss']
})
export class AccountNavbarComponent implements OnInit {
  buttonStatus:boolean = true;
  constructor(private toggler:ToggleasideService) { }

  ngOnInit(): void {
  }
  menuOpen(event,navbar){
    this.toggler.togglerSlider(this.buttonStatus)
    this.buttonStatus = !this.buttonStatus
    
  }
}
