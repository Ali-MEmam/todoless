import { Component } from '@angular/core';
import { users } from './modals/users'
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit() { }
 

  title(title: any) {
    throw new Error("Method not implemented.");
  }

  
}
