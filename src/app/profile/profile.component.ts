import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  

  usersComments=[
    {
      img: '../assets/imgs/users/default-user-image-300x300.png',
      name: 'nada',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitiaLorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, mollitia',
    }
  ];
  
  constructor(private f: FormBuilder) { }
  userComment: FormGroup;

  ngOnInit(): void {
    this.userComment = this.f.group({
      name: '',
      comment: '',
    });
  }
  onclick(event){
    console.log(event.srcElement.attributes.value.value);
    
  }
  onSubmit(form:FormGroup) {
    if (form.valid){
      // this.userComment.value.description ='sff';
      this.usersComments.push(this.userComment.value);
      console.log(this.usersComments)
      console.log("valid");
    }
  }
  colors=['#00ca5d','#2ca6ef','#192965'];
  borderLeft ="borderLeft" ;
}
