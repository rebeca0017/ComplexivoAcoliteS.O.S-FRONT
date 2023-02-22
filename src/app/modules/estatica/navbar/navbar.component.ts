import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  logout(){
    this.authService.logout().subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/login']);
      }
    });
  }

}