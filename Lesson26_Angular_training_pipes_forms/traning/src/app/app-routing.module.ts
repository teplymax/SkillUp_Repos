import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CalcComponent } from './components/calc/calc.component';
import { WeeklyCalendarComponent } from './components/weekly-calendar/weekly-calendar.component';
import { FormsComponent } from './components/forms/forms.component';
import { MyformComponent } from './components/myform/myform.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { NewdatacomponentComponent } from './components/newdatacomponent/newdatacomponent.component';
import { TimerComponent } from './components/timer/timer.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { OtherComponent } from './components/other/other.component';
import { PostComponent } from './components/post/post.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { FormstraningComponent } from './components/formstraning/formstraning.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InputComponent } from './components/input/input.component';
import { AuthGuard } from './guards/auth.guard';
import { AnimationComponent } from './components/animation/animation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShowusersComponent } from './components/showusers/showusers.component';
import { HomeworkFormsComponent } from './components/homework-forms/homework-forms.component';
import { HomeworkRoutingComponent } from './components/homework-routing/homework-routing.component';
import { HomeworkLoginComponent } from './components/homework-login/homework-login.component';
import { HomeworkInboxComponent } from './components/homework-inbox/homework-inbox.component';

const routes: Routes = [{ path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
{ path: 'calc', component: CalcComponent },
{ path: 'calendar', component: WeeklyCalendarComponent },
{ path: 'forms', component: FormsComponent },
{ path: 'myform', component: MyformComponent },
{ path: 'reactiveforms', component: ReactiveFormsComponent },
{ path: 'vizualizer', component: NewdatacomponentComponent },
{ path: 'timer', component: TimerComponent },
{ path: 'toggle', component: ToggleComponent },
{ path: 'other', component: OtherComponent },
{ path: 'post', component: PostComponent },
{ path: 'newpost', component: NewpostComponent },
{ path: 'formstraining', component: FormstraningComponent },
{ path: 'reactive', component: ReactiveformsComponent },
{ path: 'input/:name/:age', component: InputComponent },
{ path: 'animation', component: AnimationComponent },
{ path: 'registration', component: RegistrationComponent },
{ path: 'showusers', component: ShowusersComponent },
{ path: 'homework_forms', component: HomeworkFormsComponent },
{ path: 'homework_routing', component: HomeworkRoutingComponent },
{ path: 'homework_login', component: HomeworkLoginComponent },
{ path: 'homework_inbox', component: HomeworkInboxComponent, canActivate: [AuthGuard] },
{ path: '**', component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
