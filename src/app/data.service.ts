import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { RouterModule, Router } from '@angular/router'
@Injectable()
export class DataService {
  check;
  users: FirebaseListObservable<any[]>
  constructor(private afa: AngularFireAuth, private db: AngularFireDatabase, public router: Router) {
    this.users = db.list("/users");
  }

  // let formdata = { email,password };

  signup(name: string, email: string, password: string, type: string) {
    console.log("successfull");
    console.log(name,email, password, type);
    this.afa.auth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!');
        let formdata = { name, email, password, type };
        this.db.list("/users").push(formdata);
      })
      .catch(err => {
        console.log('Something went wrong:');
      })
  }

  login(email, password) {
    this.afa.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log("log in", value);
        this.router.navigate(['/student']);
      })
      .catch(err => {
        console.log("failed", err.message);
      })
  }
}
