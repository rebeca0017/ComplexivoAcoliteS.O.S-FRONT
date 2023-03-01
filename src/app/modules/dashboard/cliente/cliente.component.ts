import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.authService.getUser().subscribe((res: any) => {
      this.cliente = res;
    });
  }
  showDetails= false;

  
}
