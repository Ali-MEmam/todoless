import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    RegisterComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'todoless'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
