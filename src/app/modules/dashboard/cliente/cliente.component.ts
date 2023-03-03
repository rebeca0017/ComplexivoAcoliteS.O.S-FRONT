import { Component } from '@angular/core';
import { ClienteService } from './cliente-informacion/cliente.service';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../models/user';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: User;

  constructor(private authService: AuthService, private clienteService: ClienteService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.authService.getUser().subscribe((res: any) => {
      this.cliente = res;
    });
  }
  showDetails= false;

  updateUser() {
    this.clienteService.updateUser(this.cliente).subscribe(
      (response) => {
        console.log('actualizado con exito')
      },
      (error) => {
        console.log( 'no se pudo actualizar el cliente')
      }
    );
  }
}
