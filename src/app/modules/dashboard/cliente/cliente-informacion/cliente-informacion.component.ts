import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-cliente-informacion',
  templateUrl: './cliente-informacion.component.html',
  styleUrls: ['./cliente-informacion.component.css']
})
export class ClienteInformacionComponent {
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
