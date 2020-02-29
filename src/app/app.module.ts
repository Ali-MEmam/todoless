import { EditProjectComponent } from './edit-project/edit-project.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from "ng2-charts";
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';

import {MatRadioModule} from '@angular/material/radio';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AllProjectsComponent} from './all-projects/all-projects.component';
<<<<<<< HEAD


import { CreateProjectComponent } from './create-project/create-project.component';
// import {AsideDeveloperComponent} from './aside/aside-developer/aside-developer.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';

import { LoginComponent } from './login/login.component';
import {DragTimerComponent} from './drag-timer/drag-timer.component';

=======
import {AsideDeveloperComponent} from './aside/aside-developer/aside-developer.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {DragTimerComponent} from './drag-timer/drag-timer.component';
>>>>>>> blue
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { RegAnimationComponent } from './reg-animation/reg-animation.component';
import { TimerFormatPipe } from './timer-format.pipe';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OwnerContentComponent } from './owner-content/owner-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountNavbarComponent } from './account-navbar/account-navbar.component';
<<<<<<< HEAD

import { HomeComponent } from './home/home.component';

import { FriendRequestComponent } from './friend-request/friend-request.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { FindFriendComponent } from './find-friend/find-friend.component';
=======
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FindFriendComponent } from './find-friend/find-friend.component';
import { HomeComponent } from './home/home.component';
import {AccountComponent} from './account/account.component';
>>>>>>> blue
import { CreateNewProjectComponent } from './create-new-project/create-new-project.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
<<<<<<< HEAD
=======
import { StarRatingComponent } from './star-rating/star-rating.component';
>>>>>>> blue

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    RegisterComponent,
    NavbarComponent,
    AllProjectsComponent,       
    DeveloperContentComponent,
<<<<<<< HEAD
    // AsideDeveloperComponent,
    AdminPanelComponent,
    TimerFormatPipe,
    AllProjectsComponent,    
=======
    AdminPanelComponent,
    TimerFormatPipe,    
>>>>>>> blue
    LoginComponent,
    DragTimerComponent,
    ProjectDetailsComponent,
    RegAnimationComponent,
    EditProjectComponent,
    OwnerContentComponent,
    SidebarComponent,
    FriendsComponent,
    HomeComponent,
    LoginRegComponent,
    LoginNavbarComponent,
    ProfileComponent,
    AccountNavbarComponent,
    FriendRequestComponent,
    AllFriendsComponent,
<<<<<<< HEAD
    FindFriendComponent,
    LoginRegComponent,
    LoginNavbarComponent,
    ProfileComponent,
=======
    AccountComponent,
    AddFriendComponent,
    FindFriendComponent,
>>>>>>> blue
    CreateNewProjectComponent,
    ProjectViewComponent,
    CreateTaskComponent,
    TaskDetailsComponent,
<<<<<<< HEAD
=======
    StarRatingComponent,
>>>>>>> blue
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
    AngularFireModule.initializeApp(environment.firebase,'todoless'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatSliderModule,
    BrowserAnimationsModule,
=======
    ChartsModule,
>>>>>>> blue
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ChartsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule

  ],
 

  bootstrap: [AppComponent]
})
export class AppModule { }
