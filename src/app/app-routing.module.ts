import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { DragTimerComponent } from './drag-timer/drag-timer.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { FriendsComponent } from './friends/friends.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'account',component:AccountComponent,children:[
    {path:'friends',component:AllFriendsComponent},
    {path:'projects',component:AllProjectsComponent},
    {path:'profile',component:ProfileComponent},
  ]},
  {path:'timer',component:DragTimerComponent},
  {path:'createProject',component:CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
