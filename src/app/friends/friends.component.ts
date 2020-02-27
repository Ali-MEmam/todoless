import { Component, OnInit } from '@angular/core';
import { ToggleasideService } from '../toggleaside.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
friends=[{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},{
  img:"",
  name:"Ahmed",
  title:"Front-end Developer",
  email:"Ahmed@outlook.com",
  phone:"0111254544"
},]
  constructor(private togglerAside:ToggleasideService) { }
  pro:any;
  
  ngOnInit(): void {
    const aside = document.getElementsByClassName('friends-container')
    this.togglerAside.currentStatus.subscribe(arg =>{
      if(arg){
        aside[0].classList.add("marginright")
      }else{
        aside[0].classList.remove("marginright")
      }
    });
  }



}
