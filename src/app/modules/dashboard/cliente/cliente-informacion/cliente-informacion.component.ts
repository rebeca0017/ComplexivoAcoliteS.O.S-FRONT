import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { AuthService } from '../../../../auth/auth.service';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

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

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
