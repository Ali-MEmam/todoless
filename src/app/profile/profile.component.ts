import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  // ************* start form ***************//
  usersComments = [
    {
      img: '../assets/imgs/users/default-user-image-300x300.png',
      name: 'nada',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia',
    }
  ];

  constructor(private f: FormBuilder) { }
  userComment: FormGroup;
  colors;
  borderLeft;
  randomColor;

  ngOnInit() {
    this.userComment = this.f.group({
      img: '../assets/imgs/users/default-user-image-300x300.png',
      name: 'nada',
      comment: ['', [Validators.required]],
    });

    

  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.usersComments.push(this.userComment.value);
      console.log(this.usersComments)
      console.log("valid");
    }
    // ************* start border coloring ***************//

    this.colors = ['#00ca5d', '#2ca6ef', '#192965'];
    this.randomColor = Math.floor(Math.random() * 3);
    console.log(this.colors[this.randomColor]);
    this.borderLeft = "3px solid" + this.colors[this.randomColor];
    // ************* end border coloring ***************//


  }
  // ************* end form ***************//








  // ************* start star rating ***************//

  stars = [1, 2, 3, 4, 5];
  rating = 1;
  hoverState = 0;
  displayRate;
  onStarEnter(starId: number) {
    this.hoverState = starId;
  }
  onStarLeave() {
    this.hoverState = 0;
  }
  onStarClicked(starId: number) {
    this.rating = starId;
  }
  // ************* end star rating ***************//




  // ************* start position ***************//

  xPosition;
  yPosition;
  onMouseMove(e) {
    this.xPosition = e.x, e.y
    this.yPosition = e.y
    // console.log(e.x, e.y, data, data.attributes.style);
    // ************* end mouse position ***************//



  }


}
