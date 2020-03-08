import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBGDr7rBkwgIIqA_za_QugchaxkJxEsDPw',
  authDomain: 'pick-chos.firebaseapp.com',
  databaseURL: 'https://pick-chos.firebaseio.com',
  projectId: 'pick-chos',
  storageBucket: 'pick-chos.appspot.com',
  messagingSenderId: '99442419023',
  appId: '1:99442419023:web:c3fb2bc412562ce9d4113a',
  measurementId: 'G-EZN8PTBSGG'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
