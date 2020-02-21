import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from "ng2-charts"
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pipe, from } from 'rxjs';
import { SearchPipe } from './search.pipe';
import { TimerFormatPipe } from './timer-format.pipe';

import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
<<<<<<< HEAD
import {AllProjectsComponent} from './all-projects/all-projects.component';
import {AsideDeveloperComponent} from './aside/aside-developer/aside-developer.component';
=======
>>>>>>> 57ded8e5d6f59cf2ef588c168f179d8185b6a77f
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {DragTimerComponent} from './drag-timer/drag-timer.component';
import { CreateProjectComponent } from './create-project/create-project.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    RegisterComponent,
    NavbarComponent,
<<<<<<< HEAD
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
=======
    AdminPanelComponent,
    DeveloperContentComponent,
    TimerFormatPipe,    
    LoginComponent,
    DragTimerComponent, CreateProjectComponent,
>>>>>>> 57ded8e5d6f59cf2ef588c168f179d8185b6a77f

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
<<<<<<< HEAD

    BrowserAnimationsModule,
    ChartsModule

   
=======
    BrowserAnimationsModule,
>>>>>>> 57ded8e5d6f59cf2ef588c168f179d8185b6a77f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
