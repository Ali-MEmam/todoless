import { Component } from '@angular/core';
import { users } from './modals/users'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error("Method not implemented.");
  }
  filtering = "";

  // ArrObj: users[] = [{
  //   id: "1234",
  //   name: "ali",
  //   role: "developer",
  //   email: "ali.emamfe@gmail.com",
  //   password: "3917633",
  //   projects: ["4445", "5554"],
  // },
  // {
  //   id: "9876",
  //   name: "mohamed",
  //   role: "designer",
  //   email: "ali.emamfe@gmail.com",
  //   password: "3917633",
  //   projects: ["4445", "5554"],
  // }, {
  //   id: "5678",
  //   name: "Ahmed",
  //   role: "developer",
  //   email: "ahmede@gmail.com",
  //   password: "3917633",
  //   projects: ["4445", "5554"],
  // },
  // {
  //   id: "4321",
  //   name: "Eslam",
  //   role: "designer",
  //   email: "eslam@gmail.com",
  //   password: "3917633",
  //   projects: ["4445", "5554"],
  // }, {
  //   id: "0123",
  //   name: "Mahmoud",
  //   role: "developer",
  //   email: "mahmoud@gmail.com",
  //   password: "3917633",
  //   projects: ["4445", "5554"],
  // }]

}
