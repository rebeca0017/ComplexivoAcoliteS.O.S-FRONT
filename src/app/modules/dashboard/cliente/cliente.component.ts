import { Component } from '@angular/core';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: any;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getCliente().subscribe((data: any) => {
      this.cliente = data;
    });
  }

}
