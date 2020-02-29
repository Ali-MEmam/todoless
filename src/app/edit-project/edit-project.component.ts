import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  project = {
    id:'',
    ownerId : '',
    tasksId :'',
    invitors :'',
    name :'TO DO LESS',
    description : 'this project is very important to us because it is the final project , and we were stucked in it until the UI team went to hell . fa rbna yostr. ',
    image :'',
    color :'',
    startDate : '2/2/2020',
    endDate :'2/6/2020',
    privacy :'public'
  }
  myControl = new FormControl();
  options: User[] = [
    {name: 'Ali Emam'},
    {name: 'Mai Mohamed'},
    {name: 'Omnia Ahmed'},
    {name: 'Nada Yousry'},
    {name: 'Mohamed Elsaeid'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
