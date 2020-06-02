import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setLoggedInUser(user: UserModel) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
