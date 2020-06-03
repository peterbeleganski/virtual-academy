import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../models/course.model';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  course: CourseModel;
  constructor() {
    this.course = {
      title: '',
      rating: 0,
      publishDate: '',
      description: ''
    };
  }

  ngOnInit() {
  }

}
