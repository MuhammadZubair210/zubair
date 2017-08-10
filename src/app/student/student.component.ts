import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {


  ngOnInit() {
  }

  form: FormGroup;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;

  name = "zubair"
  constructor(public af: AngularFireAuth, public afd: AngularFireDatabase, private fb: FormBuilder, public router: Router) {
    this.createform();

    this.items = afd.list('/student', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.af.authState;
  }

  createform() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      qualification: ['', Validators.required],
      cgpa: ['', Validators.required],
    })
  }

  submit() {
    const { name, qualification, cgpa } = this.form.value;
    let formdata = { name, qualification, cgpa };
    this.afd.list('/student').push(formdata);
  }


  signout() {
    this.af.auth.signOut();
    this.router.navigate(["/signup"]);
  }
 
}
