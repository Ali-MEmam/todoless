import { Component, OnInit } from '@angular/core';
import { users } from '../modals/users';
import { usersService } from "../users.service/users.service";

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.scss']
})
export class FindFriendComponent implements OnInit {

  friends:users[];
  friendsUser=[];
  friend;

  constructor(private usersService : usersService) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(items=>{
      console.log(items);
      this.friends = items;
      // this.friend = items.filter(data=>data.id === "3Vm09sm0JH3bVZooPgTe");
      // console.log(this.friend[0].name);
    })
  }
  
  addFriend(event,item){
    this.friendsUser.push(item.id);
<<<<<<< HEAD
    this.usersService.editUser(item);
    // console.log(this.friendsUser);   
    
=======
    this.usersService.editUser(item.id);
    console.log(this.friendsUser);   
>>>>>>> blue
  }

}
