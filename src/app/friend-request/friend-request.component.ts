
import { Component, OnInit } from '@angular/core';
import { users } from '../modals/users';
import { usersService } from "../users.service/users.service";
import { AccountInfoService } from '../account-info.service';
@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  friendrequests:users[];
  users:users[];
  friendsUser=[];
  currentUser;

  constructor(private usersService : usersService,
    private loged:AccountInfoService) { }

  ngOnInit(): void {
    this.loged.userloged.subscribe(UserInfo =>{
      this.currentUser = UserInfo
    })
    this.usersService.getUser().subscribe(users=>{
      let currentFriends = [];
      for(var i = 0 ; i < users.length ; i++){
        if(this.currentUser.friendrequest){
        for(var j = 0 ; j < this.currentUser.friendrequest.length ; j++){
          // console.log(users[i].id,this.currentUser.friendrequest[j])
          if(users[i].id === this.currentUser.friendrequest[j]){
            // console.log(this.currentUser.friendrequest);

            currentFriends.push(users[i])
          }
        }
      }
    }
      this.friendrequests = currentFriends;
      console.log(this.friendrequests);
      

    }
    )
  }
  addFriend(event,item){
    this.currentUser.friends.push(item.id);
    let itemIndex = this.currentUser.friendrequest.indexOf(item.id);
    this.currentUser.friendrequest.splice(itemIndex , 1);
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    this.loged.getAccount();
    this.usersService.updateUser(this.currentUser);
  }
  
  rejectFriend(event,item){
    let itemIndex = this.currentUser.friendrequest.indexOf(item.id);
    this.currentUser.friendrequest.splice(itemIndex , 1);
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser));
    this.loged.getAccount();
    this.usersService.updateUser(this.currentUser);
  }

}