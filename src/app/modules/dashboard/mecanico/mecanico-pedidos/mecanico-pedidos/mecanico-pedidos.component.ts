import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';
import { Pedido } from '../../../../../models/pedido';
import { MecanicoService } from '../../../mecanico/mecanico.service';
import { PedidoService } from '../../../pedidos/pedidos.service';
import { VehiculoService } from '../../../vehiculo/vehiculo.service';
import { Vehiculo } from '../../../../../models/vehiculo';


@Component({
  selector: 'app-mecanico-pedidos',
  templateUrl: './mecanico-pedidos.component.html',
  styleUrls: ['./mecanico-pedidos.component.css']
})
export class MecanicoPedidosComponent {
  pedido: Pedido = {} as Pedido;
  pedidos: Pedido[];
  mecanico: any;
  vehiculo: Vehiculo = {} as Vehiculo;
  vehiculos: Vehiculo[];

constructor(private authService: AuthService, private mecanicoService: MecanicoService, private pedidoService: PedidoService, private vehiculoservice: VehiculoService){

}

  ngOnInit() {
    this.getUser();
    this.getPedidos();
    this.getProfile();
  }



  getUser() {
    this.authService.getUser().subscribe((res: any) => {
      this.mecanico = res;
    });
  }
  showDetails = false;

  getVehiculos() {
    this.mecanicoService.getVehicles().subscribe((res: any) => {
      this.vehiculos = res;
      console.log(res)
    });
  }

  getPedidos() {
    this.pedidoService.getOrders().subscribe((res: any) => {
      this.pedidos = res;
      console.log(res)
    });
  }

  aceptarPedido(idPedido: number, idMecanico: number): void {
    this.mecanicoService.aceptarPedido(idPedido, idMecanico)
      .subscribe(
        response => {
          console.log(response);
          this.getPedidos();
        },
        error => {
          console.log(error);
        }
      );
  }



  getProfile() {
    this.authService.getProfile().subscribe((res: any) => {
      this.mecanico = res.data.user;
      console.log(res)
    });
  }
}
