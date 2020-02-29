import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { DragTimerComponent } from './drag-timer/drag-timer.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'developerContent',component:DeveloperContentComponent},
  {path:'timer',component:DragTimerComponent},
  {path:'createProject',component:CreateProjectComponent},
  {path:'projectDetails',component:ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
