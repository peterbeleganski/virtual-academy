import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {AuthGuard} from './auth/auth.guard';
import {FavouriteCoursesComponent} from './favourite-courses/favourite-courses.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {CourseCreateComponent} from './cource-create/course-create.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'courses', component: CoursesListComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'courses/create', component: CourseCreateComponent, canActivate: [AuthGuard] },
  { path: 'favourite-courses', component: FavouriteCoursesComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
