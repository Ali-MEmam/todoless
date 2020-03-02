import { Component, OnInit } from '@angular/core';
import { users } from '../modals/users';
import { usersService } from "../users.service/users.service";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
// friends=[{
//   img:"",
//   name:"Ahmed",
//   title:"Front-end Developer",
//   email:"Ahmed@outlook.com",
//   phone:"0111254544"
// },{
//   img:"",
//   name:"Ahmed",
//   title:"Front-end Developer",
//   email:"Ahmed@outlook.com",
//   phone:"0111254544"
// },{
//   img:"",
//   name:"Ahmed",
//   title:"Front-end Developer",
//   email:"Ahmed@outlook.com",
//   phone:"0111254544"
// }]

friends:users[];
users:users[];
blockFriends=[];

  constructor(private usersService : usersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(items=>{
      console.log(items);
      this.friends = items;
    })
  }


  deleteFriend(event,item){
    // this.usersService.deleteUser(item);
    console.log(item);
  }

  blockFriend(event,item){
    console.log(item);
    this.blockFriends.push(item);
    console.log(this.blockFriends);
    // this.users[1].blockFriends = this.usersService.createUser(item);
  }

}
