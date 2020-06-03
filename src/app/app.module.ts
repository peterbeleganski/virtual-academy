import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { FavouriteCoursesComponent } from './favourite-courses/favourite-courses.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CourseCreateComponent } from './cource-create/course-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    CoursesListComponent,
    FavouriteCoursesComponent,
    MyProfileComponent,
    CourseCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
