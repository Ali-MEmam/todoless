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
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AsideDeveloperComponent } from './aside/aside-developer/aside-developer.component';
import { DeveloperContentComponent } from './developer-content/developer-content.component';
<<<<<<< HEAD


import { LoginComponent } from './login/login.component';
import {DragTimerComponent} from './drag-timer/drag-timer.component';
import { CreateProjectComponent } from './create-project/create-project.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon';
import { RegAnimationComponent } from './reg-animation/reg-animation.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimerFormatPipe } from './timer-format.pipe';
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab

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
<<<<<<< HEAD
    LoginComponent,
    DragTimerComponent, CreateProjectComponent, RegAnimationComponent,
=======
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab

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
<<<<<<< HEAD
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
=======
    
>>>>>>> 2b563011e205b0e0f374ee74112577fd2dac13ab
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
