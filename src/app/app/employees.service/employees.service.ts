import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { employees } from '../modals/employees';
import { map } from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employeesCollection: AngularFirestoreCollection<employees>;
  employees: Observable<employees[]>;

  //to delete declare 
  empolyeesDoc: AngularFirestoreDocument<employees>;

  //to edit declare
  private idTranssform =new BehaviorSubject("");
  currentId = this.idTranssform.asObservable();

  constructor(public firestore: AngularFirestore) {
    this.employeesCollection = this.firestore.collection('employees');
    this.employees = this.employeesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as employees;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
  }

  //create-employee 
  createEmp(item: employees) {
    return this.firestore.collection('employees').add(item);
  }

  //get-employee 
  getEmp() {
    return this.firestore.collection('employees').valueChanges({idField:'id'});
  }

  //delete-employee 
  deleteEmp(item:employees) {
    this.empolyeesDoc = this.firestore.doc(`employees/${item.id}`);
    this.empolyeesDoc.delete();
  }

  //edit-employee 
  editEmp(item:any){
    this.idTranssform.next(item);
  }

}


