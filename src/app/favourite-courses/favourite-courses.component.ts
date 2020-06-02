import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../models/course.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../auth/user.service';

@Component({
  selector: 'app-favourite-courses',
  templateUrl: './favourite-courses.component.html',
  styleUrls: ['./favourite-courses.component.css']
})
export class FavouriteCoursesComponent implements OnInit {
  courses: CourseModel[];
  constructor(private httpClient: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.fetchCourses();
  }

  async fetchCourses() {
    const currUser = this.userService.getLoggedInUser();
    this.courses = currUser.courses;
  }

}
