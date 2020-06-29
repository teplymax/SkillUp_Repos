import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './components/newuser/newuser.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [{ path: "newuser", component: NewUserComponent },
{ path: "userlist", component: UserListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
