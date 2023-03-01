import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.authService.logout().subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/login']);
      }
    });
  }

  cliente: any;

  getUser() {
    this.authService.getUser().subscribe((res: any) => {
      this.cliente = res;
    });
  }
}
