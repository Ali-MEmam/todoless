import { Component, OnInit } from '@angular/core';
import { users } from '../modals/users';
import { usersService } from "../users.service/users.service";
import { AccountInfoService } from '../account-info.service';

@Component({
  selector: 'app-find-friend',
  templateUrl: './find-friend.component.html',
  styleUrls: ['./find-friend.component.scss']
})
export class FindFriendComponent implements OnInit {

  friends:users[];
  friendsUser=[];
  friend;
  currentUser;
  people:any;
  constructor(private usersService : usersService,
    private loged:AccountInfoService) { }

  ngOnInit(): void {
    this.loged.userloged.subscribe(UserInfo =>{
      this.currentUser = UserInfo
    })
    
    this.usersService.getUser().subscribe(users=>{
      let currentFriends = [];
      let find = [];
      console.log(users)
      for(var i = 0 ; i < users.length ; i++){
        let flag = true;
        console.log(this.currentUser.friend)

        if(this.currentUser.friends){
          for(var j = 0 ; j < this.currentUser.friends.length ; j++){
            if(users[i].id === this.currentUser.friends[j]){
                currentFriends.push(users[i])
                flag = false;
            }
          }
      }
        if(flag){
          find.push(users[i])
        }
      }

      this.friends = currentFriends;
      this.people = [...new Set(find)] ;
      console.log(this.friends)
      console.log(this.people)

    }
    )
  }
  
  addFriend(event,item){
    this.friendsUser.push(item.id);
    this.usersService.editUser(item.id);
    console.log(this.friendsUser);   
  }

}
