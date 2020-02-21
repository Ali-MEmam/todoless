import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pipe } from 'rxjs';
import { SearchPipe } from './search.pipe';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerFormatPipe } from './timer-format.pipe';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    RegisterComponent,
    NavbarComponent,
    DeveloperContentComponent,
    TimerFormatPipe,
    AdminPanelComponent,
    
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
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
