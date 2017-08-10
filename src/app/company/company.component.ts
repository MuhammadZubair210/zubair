import { Component, OnInit,Input } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {StudentComponent} from '../student/student.component';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {

  constructor(private db:AngularFireDatabase,private st:StudentComponent) {

   }

  ngOnInit() {
  }
   title = this.st.items;

}
