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

  // *************************************** start  vars ***************************************//
  constructor(private f: FormBuilder,
    private usersService: usersService) { }
  userComment: FormGroup;
  userProfile: FormGroup;
  colors;
  borderLeft;
  randomColor;
  fileData: any;
  fileSrc: string | ArrayBuffer;
  file: any;
  profile: users;

  sum: number;
  avgStars = 1;
  userSum = 0;

  usersComments = [];
  currentUserProfile = {
    name: 'Nada Yousry',
    title: 'Front-End Developer',
    image: '',
    starts: '',
    email: 'nadayousry@gmail.com',
    comments: '',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos libero iusto illum fugit ab cumperspiciatis ipsa corporis aut rerum maxime porro officia ut? Corporis aliquam error porro omnis quas.'
  }

  // *************************************** end  vars ***************************************//





  // *************************************** start form ***************************************//
  ngOnInit() {
    this.fileSrc = "../../assets/imgs/users/default-user-image-300x300.png";
    this.userComment = this.f.group({
      img: '../assets/imgs/users/default-user-image-300x300.png',
      name: 'nada',
      comment: ['', [Validators.required]],
      rate: 0
    });
    this.userProfile = this.f.group({
      name: 'Nada Yousry',
      title: 'Front-End Developer',
      image: '',
      starts: '',
      email: '',
      bio: '',
      comments: '',
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.sum = 0;
      this.userComment.value.rate = this.rating //initialize rating on form submit 
      this.usersComments.push(this.userComment.value);
      console.log(this.userComment.value);
      console.log(this.usersComments);
      console.log("valid");
      //calc avg
      for (let i = 0; i < this.usersComments.length; i++) {
        this.sum += this.usersComments[i].rate;
        this.avgStars = this.sum / this.usersComments.length;
        
      }
      console.log(this.avgStars);
    }


    // ************* start border coloring ***************//

    this.colors = ['#00ca5d', '#2ca6ef', '#192965'];
    this.randomColor = Math.floor(Math.random() * 3);
    // console.log(this.colors[this.randomColor]);
    this.borderLeft = "3px solid" + this.colors[this.randomColor];

    // ************* end border coloring ***************//


  }
  // *************************************** end form ***************************************//





  // *************************************** start edit profile data*****************************************//
  onEditClick(event, textArea, bioParagraph, saveDataBtn) {
    event.target.style.display = "none";
    textArea.style.display = 'block';
    bioParagraph.style.display = 'none';
    saveDataBtn.style.display = 'inline-block';

  }
  // *************************************** end edit profile data*****************************************//

  onEditTitleClick(event, titleTextArea, titleEdit,saveDataBtn) {
    event.target.style.display = "none";
    titleTextArea.style.display = 'block';
    titleEdit.style.display = 'none';
    saveDataBtn.style.display = "inline-block";

  }


  // *************************************** start save profile data*****************************************//
  onSaveClick(event, textArea, bioParagraph, editDataBtn, titleTextArea, titleEdit,titleEditDataBtn) {
    event.target.style.display = "none";
    textArea.style.display = 'none';
    bioParagraph.style.display = 'block';
    titleTextArea.style.display = 'none';
    titleEdit.style.display = 'block';
    editDataBtn.style.display = "inline-block";
    titleEditDataBtn.style.display = "inline-block";
    this.currentUserProfile.bio = textArea.value;
    this.currentUserProfile.title = titleTextArea.value;
  }
  // *************************************** end save profile data*****************************************//





  // *************************************** start star rating ***************************************//

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
    dataHovering.style.top = '95%';
    setTimeout(() => {
      dataHovering.style.top = '100%';
    }, 1000)
    // console.log(dataHovering);


  }


  // *************************************** end star rating ***************************************//

  readURL(event: any) {
    this.fileData = <File>event.target.files[0];
    // console.log(this.fileData);
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
      // console.log(this.file)
      // this.users.value.attachment = this.file;
      // console.log(this.projectForm.value.attachment) ;
      this.userProfile.value.image = this.file;
    };
  }
}
