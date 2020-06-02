import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CourseModel} from '../models/course.model';
import {Constants} from '../common/constants';
import {UserService} from '../auth/user.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  courses: CourseModel[];
  constructor(private httpClient: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.fetchCourses();
  }

  async fetchCourses() {
    this.courses = await this.httpClient.get<CourseModel[]>(`${Constants.API_URL}courses`)
      .toPromise();
    console.log(this.courses);
  }

  async addToFavourites(course: CourseModel) {
    const user = this.userService.getLoggedInUser();

    if (user.courses) {
      const isExistingCourse = user.courses.filter(c => c.id === course.id)[0];
      if (!isExistingCourse) {
        user.courses.push(course);
      }
    } else {
      user.courses = [];
      user.courses.push(course);
    }
    const res = await this.httpClient.put<UserModel>(`${Constants.API_URL}users/${user.id}`, user).toPromise();
    this.userService.setLoggedInUser(res);
  }
}
