import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from
  '@angular/fire/database';
export const firebaseConfig = {//firebaseConfig не можна закидувати на Github
  apiKey: "AIzaSyBRKgo58KRN1sRoL5BlZyCPn9chMDEl6D8",
  authDomain: "maxapp-3f9f5.firebaseapp.com",
  databaseURL: "https://maxapp-3f9f5.firebaseio.com",
  projectId: "maxapp-3f9f5",
  storageBucket: "maxapp-3f9f5.appspot.com",
  messagingSenderId: "384532740426",
  appId: "1:384532740426:web:f988240184685321a9e9b3"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
