import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitProfileService {
  private profileSoruce = new BehaviorSubject('')
  vistedprofile = this.profileSoruce.asObservable()
  constructor() { }
  activeVistor(obj){
    this.profileSoruce.next(obj)
    console.log(obj)
  }
}
