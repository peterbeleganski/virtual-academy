import { Component, OnInit } from '@angular/core';
import {UserService} from '../auth/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.userService.getLoggedInUser();
  }

  isAdmin() {
    return this.userService.getLoggedInUser().isAdmin;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
