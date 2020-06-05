import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../common/constants';
import {CourseModel} from '../models/course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course: CourseModel;
  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private router: Router) {
    this.course  = {
      title: '',
      publishDate: '',
      description: ''
    };
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.course = await this.httpClient.get<CourseModel>(`${Constants.API_URL}courses/${id}`).toPromise();
  }

  async edit(id: string) {
    const res = await this.httpClient.put<CourseModel>(`${Constants.API_URL}courses/${id}`, this.course).toPromise();
    this.router.navigate(['courses']);
  }

}
