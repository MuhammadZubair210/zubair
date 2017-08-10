import { Component, OnInit,Input } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {StudentComponent} from '../student/student.component';
import {AppComponent} from '../app.component';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {

  constructor(private db:AngularFireDatabase,private st:StudentComponent,private router:Router,private af:AngularFireAuth) {

   }

  ngOnInit() {
  }
 student = this.st.items
  signout() {
    this.af.auth.signOut();
    this.router.navigate(["/signup"]);
  }
  
}
