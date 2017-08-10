import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DataService } from './data.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { CompanyComponent } from './company/company.component';
import { LogincompanyComponent } from './logincompany/logincompany.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'studentlogin', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'companylogin', component: CompanyComponent }
];

export const config = {
  apiKey: "AIzaSyAIelfouKdlPtamjrHbXQDGEHXzmit5UJo",
  authDomain: "zubair-3e1fd.firebaseapp.com",
  databaseURL: "https://zubair-3e1fd.firebaseio.com",
  projectId: "zubair-3e1fd",
  storageBucket: "zubair-3e1fd.appspot.com",
  messagingSenderId: "469580536616"
};
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    StudentComponent,
    CompanyComponent,
    LogincompanyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    RouterModule.forRoot(routes, { useHash: true })
  ],

  providers: [DataService, StudentComponent, CompanyComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
