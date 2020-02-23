import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChartsModule} from "ng2-charts"
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
<<<<<<< HEAD

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

=======

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
>>>>>>> 1f386c4098f50d4a6b103043a9b18976c992144e
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
import { AsideDeveloperComponent } from './aside/aside-developer/aside-developer.component';
>>>>>>> 1f386c4098f50d4a6b103043a9b18976c992144e
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
<<<<<<< HEAD

=======
>>>>>>> 1f386c4098f50d4a6b103043a9b18976c992144e


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
<<<<<<< HEAD
    DragTimerComponent, CreateProjectComponent,
    DragTimerComponent, CreateProjectComponent, RegAnimationComponent,

=======
    DragTimerComponent,
    CreateProjectComponent,
    RegAnimationComponent,
>>>>>>> 1f386c4098f50d4a6b103043a9b18976c992144e

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
    ChartsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
