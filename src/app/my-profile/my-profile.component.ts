import { Component, OnInit } from '@angular/core';
import {UserModel} from '../models/user.model';
import {UserService} from '../auth/user.service';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../common/constants';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  updated = false;
  user: UserModel;
  constructor(private userService: UserService, private httpClient: HttpClient) { }

  ngOnInit() {
    this.user = this.userService.getLoggedInUser();
  }

  async edit() {
    const res = await this.httpClient.put<UserModel>(`${Constants.API_URL}users/${this.user.id}`, this.user).toPromise();
    this.userService.setLoggedInUser(res);
    this.user = this.userService.getLoggedInUser();
    this.updated = true;
  }

}
