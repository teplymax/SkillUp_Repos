import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/newuser/newuser.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersService } from '../app/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
