import { Component, OnInit } from '@angular/core';
import { users } from '../modals/users';
import { usersService } from "../users.service/users.service";
import { AccountInfoService } from '../account-info.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

friends:users[];
findFriend:users[];
users:users[];
blockFriends=[];
currentUser;

  constructor(private usersService : usersService,
    private loged:AccountInfoService) { }

  ngOnInit(): void {
    this.loged.userloged.subscribe(UserInfo =>{
      this.currentUser = UserInfo
    })
    this.usersService.getUser().subscribe(users=>{
      let currentFriends = [];
      let find = [];
      for(var i = 0 ; i < users.length ; i++){
        if(this.currentUser.friends){
        for(var j = 0 ; j < this.currentUser.friends.length ; j++){
          if(users[i].id === this.currentUser.friends[j]){
            currentFriends.push(users[i])
          }else{
            find.push(users[i])
          }
        }
      }
    }
      this.friends = currentFriends;
      this.findFriend = find

    }
    )

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