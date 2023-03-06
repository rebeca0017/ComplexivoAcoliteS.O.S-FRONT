import { Component } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { AuthService } from '../../../auth/auth.service';
import { Pedido } from '../../../models/pedido';
import { MecanicoService } from '../mecanico/mecanico.service';
import { PedidoService } from '../pedidos/pedidos.service';
import { VehiculoService } from '../vehiculo/vehiculo.service';

@Component({
  selector: 'app-mecanico',
  templateUrl: './mecanico.component.html',
  styleUrls: ['./mecanico.component.css']
})
export class MecanicoComponent {
  pedido: Pedido = {} as Pedido;
  pedidos: Pedido[];
  mecanico: any;
  

  constructor(private authService: AuthService, private mecanicoService: MecanicoService, private pedidoService: PedidoService) { }

  ngOnInit() {
    this.getUser();
    this.getPedidos();
  }

  

  getUser() {
    this.authService.getUser().subscribe((res: any) => {
      this.mecanico = res;
    });
  }
  showDetails= false;
  
  
  getPedidos() {
    this.pedidoService.getOrders().subscribe((res: any) => {
      this.pedidos = res;
      console.log(res)
    });
  }

  aceptarPedido(idPedido: number, idMecanico:number): void {
    this.mecanicoService.aceptarPedido(idPedido, idMecanico)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
}

