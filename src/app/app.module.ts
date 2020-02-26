import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ChartsModule} from "ng2-charts"
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pipe, from } from 'rxjs';
import { SearchPipe } from './search.pipe';
import { TimerFormatPipe } from './timer-format.pipe';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AllProjectsComponent} from './all-projects/all-projects.component';
import {AsideDeveloperComponent} from './aside/aside-developer/aside-developer.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {DragTimerComponent} from './drag-timer/drag-timer.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { RegAnimationComponent } from './reg-animation/reg-animation.component';
import { OwnerContentComponent } from './owner-content/owner-content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { LoginNavbarComponent } from './login-navbar/login-navbar.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    RegisterComponent,
    NavbarComponent,

    AsideDeveloperComponent,
    DeveloperContentComponent,
    TimerFormatPipe,
    AdminPanelComponent,    
    AdminPanelComponent,
    DeveloperContentComponent,
    TimerFormatPipe,
    AllProjectsComponent,    
    DragTimerComponent,
    AdminPanelComponent,
    DeveloperContentComponent,
    TimerFormatPipe,   
    TimerFormatPipe,    
    LoginComponent,
    DragTimerComponent,
    CreateProjectComponent,
    RegAnimationComponent,
    OwnerContentComponent,
    SidebarComponent,
    FriendsComponent,

    LoginRegComponent,
    LoginNavbarComponent,
    ProfileComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase,'todoless'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
  
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
