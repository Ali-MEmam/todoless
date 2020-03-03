import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDisplayService {
private projectSource = new BehaviorSubject('')
currentProject = this.projectSource.asObservable()
  constructor() { }
  displayProject(project){
    this.projectSource.next(project)
  }
}
