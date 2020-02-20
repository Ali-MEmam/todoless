import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pipe, from } from 'rxjs';
import { SearchPipe } from './search.pipe';
import { TimerFormatPipe } from './timer-format.pipe';

import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AsideDeveloperComponent } from './aside/aside-developer/aside-developer.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragTimerComponent} from './drag-timer/drag-timer.component';
import { CreateProjectComponent } from './create-project/create-project.component';


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
    DragTimerComponent,
    TimerFormatPipe,
    
    TimerFormatPipe,    
    DragTimerComponent, CreateProjectComponent,

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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
