import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'


export const firebaseConfig = {
  apiKey: "AIzaSyAH85yP665HS5CFIPtE0d834CIb_IRRsVo",
  authDomain: "chatapp-1d01d.firebaseapp.com",
  databaseURL: "https://chatapp-1d01d.firebaseio.com",
  projectId: "chatapp-1d01d",
  storageBucket: "chatapp-1d01d.appspot.com",
  messagingSenderId: "838294754229"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
