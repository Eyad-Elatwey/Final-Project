import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //global: GlobalService
  flag: boolean = true
  constructor(public global: GlobalService) {
    
  }
  handleLogOut() {
    localStorage.removeItem('userName')
    localStorage.removeItem('userToken')
    this.global.isLogin = false
  }
}
