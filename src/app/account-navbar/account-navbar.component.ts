import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-navbar',
  templateUrl: './account-navbar.component.html',
  styleUrls: ['./account-navbar.component.scss']
})
export class AccountNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menuOpen(event,navbar){
    console.log(navbar.parentNode)
  }
}
