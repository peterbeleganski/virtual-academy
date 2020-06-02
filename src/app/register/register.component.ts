import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/user.model';
import {Constants} from '../common/constants';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../auth/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserModel;
  error: string;
  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private router: Router) {
    this.user = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  }

  ngOnInit() {
  }

  async register() {
    const userArr = await this.httpClient.get<UserModel[]>(`${Constants.API_URL}users?email=${this.user.email}`)
      .toPromise();

    if (userArr[0] !== undefined) {
      this.error = 'Email already exists';
    } else {
      this.user.isActive = true;
      this.user.isAdmin = false;

      const registeredUser = await this.httpClient.post<UserModel>(`${Constants.API_URL}users`, this.user)
        .toPromise();
      this.userService.setLoggedInUser(registeredUser);
      this.router.navigate(['courses']);
    }
  }

}
