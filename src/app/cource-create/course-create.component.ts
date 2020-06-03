import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../models/course.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserModel} from '../models/user.model';
import {Constants} from '../common/constants';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  course: CourseModel;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.course = {
      title: '',
      rating: 0,
      publishDate: '',
      description: ''
    };
  }

  ngOnInit() {
  }

  async add() {
    const course = await this.httpClient.post<CourseModel>(`${Constants.API_URL}courses`, this.course)
      .toPromise();
    this.router.navigate(['courses']);
  }

}
