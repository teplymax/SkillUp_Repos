import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { ShadowDirective } from './dirictives/shadow.directive';
import { CalcComponent } from './components/calc/calc.component';
import { FilesizePipe } from './pipes/filesize.pipe';
import { WeeklyCalendarComponent } from './components/weekly-calendar/weekly-calendar.component';
import { MyDatePipe } from './pipes/my-date.pipe';
import { PUppercasePipe } from './pipes/p-uppercase.pipe';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { MyformComponent } from './components/myform/myform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { NewdatacomponentComponent } from './components/newdatacomponent/newdatacomponent.component';
import { NewdataService } from './services/newdata.service';
import { TimerComponent } from './components/timer/timer.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { OtherComponent } from './components/other/other.component';
import { ToggleService } from './services/toggle.service';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { FormstraningComponent } from './components/formstraning/formstraning.component';
import { ReactiveformsComponent } from './components/reactiveforms/reactiveforms.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InputComponent } from './components/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './components/animation/animation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShowusersComponent } from './components/showusers/showusers.component';
import { UserServiceService } from './services/user-service.service';
import { HomeworkFormsComponent } from './components/homework-forms/homework-forms.component';
import { HomeworkRoutingComponent } from './components/homework-routing/homework-routing.component';
import { HomeworkLoginComponent } from './components/homework-login/homework-login.component';
import { HomeworkInboxComponent } from './components/homework-inbox/homework-inbox.component';

// імпортуємо
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    MainComponent,
    ShadowDirective,
    CalcComponent,
    FilesizePipe,
    WeeklyCalendarComponent,
    MyDatePipe,
    PUppercasePipe,
    FormsComponent,
    MyformComponent,
    ReactiveFormsComponent,
    NewdatacomponentComponent,
    TimerComponent,
    ToggleComponent,
    OtherComponent,
    PostComponent,
    NewpostComponent,
    FormstraningComponent,
    ReactiveformsComponent,
    PagenotfoundComponent,
    InputComponent,
    AnimationComponent,
    RegistrationComponent,
    ShowusersComponent,
    HomeworkFormsComponent,
    HomeworkRoutingComponent,
    HomeworkLoginComponent,
    HomeworkInboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [NewdataService, ToggleService, PostService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
