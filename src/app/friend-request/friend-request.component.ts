import { Component, OnInit } from '@angular/core';
import { users } from '../modals/users';
import { usersService } from "../users.service/users.service";
<<<<<<< HEAD



=======
>>>>>>> blue
@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  friends:users[];
  users:users[];
  friendsUser=[];

  constructor(private usersService : usersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(items=>{
      console.log(items);
      this.friends = items;
    })
  }
<<<<<<< HEAD
  
=======
>>>>>>> blue
  addFriend(event,item){
    this.friendsUser.push(item);
    console.log(this.friendsUser);
  }
  
  rejectFriend(event,item){
    console.log(item);
  }

}