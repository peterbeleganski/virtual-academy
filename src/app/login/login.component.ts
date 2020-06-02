import {Component, OnInit} from '@angular/core';
import {UserModel} from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../common/constants';
import {UserService} from '../auth/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel;
  error: string;
  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private router: Router) {
    this.user = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  async login() {
    const foundUser =
      await this.httpClient.get<UserModel[]>(`${Constants.API_URL}users?email=${this.user.email}&password=${this.user.password}`)
        .toPromise();
    if (foundUser[0] !== undefined) {
      // TODO log user
      this.userService.setLoggedInUser(foundUser[0]);
      this.error = undefined;
      this.router.navigate(['courses']);
    } else {
      this.error = 'Incorrect email or password';
    }
  }
}
