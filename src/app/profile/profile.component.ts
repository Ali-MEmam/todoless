import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usersService } from "../users.service/users.service";
import { users } from '../modals/users';

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

  constructor(private f: FormBuilder,
    private usersService:usersService) { }
    userComment: FormGroup;
    userProfile: FormGroup;
    colors;
    borderLeft;
    randomColor;
    fileData: any;
    fileSrc: string | ArrayBuffer;
    file: any;
    profile:users;  
    commentStars=[];
    avgStars:number;


  ngOnInit() {
    this.fileSrc="../../assets/imgs/users/default-user-image-300x300.png";
    this.userComment = this.f.group({
      img: '../assets/imgs/users/default-user-image-300x300.png',
      name: 'nada',
      comment: ['', [Validators.required]],
      rate:''
    });
    this.userProfile=this.f.group({
      image:'',
      starts:'',
      comments:''
    });
  }

sum=0;
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.userComment.value.rate  = this.rating
      this.usersComments.push(this.userComment.value);
      this.userProfile.value.comments = this.usersComments;
      // this.userProfile.value.starts = this.rating;
      this.commentStars.push(this.rating);
      console.log(this.commentStars);
      for(let i of this.commentStars){
        this.sum=this.sum+this.commentStars[i];
        console.log(this.sum);
        
        this.avgStars=this.sum/this.commentStars.length;
      }
      console.log(this.avgStars);
      console.log(this.userProfile.value);
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
  onBtnSubmit(created){
    console.log({created},created.childNodes[1]);
    
  }


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
  onStarClicked(starId: number, dataHovering) {
    this.rating = starId;
    dataHovering.style.top='95%';
    setTimeout(()=>{  
    dataHovering.style.top='100%';
    },1000)
    console.log(dataHovering);

  }
  // ************* end star rating ***************//

  readURL(event: any) {
    this.fileData = <File>event.target.files[0];
    console.log(this.fileData);
    this.preview();
  }

  preview() {
    let mimeType = this.fileData.type;
    if (mimeType.match(/image||text\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = event => {
      this.fileSrc = reader.result;
      this.file = reader.result;
      console.log(this.file)
      // this.users.value.attachment = this.file;
      // console.log(this.projectForm.value.attachment) ;
      this.userProfile.value.image=this.file;
    };
  }
}
