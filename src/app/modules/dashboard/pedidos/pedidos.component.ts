import { Component } from '@angular/core';
import { PedidoService } from './pedidos.service';


import { AuthService } from '../../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';
import { VehiculoService } from '../vehiculo/vehiculo.service';
import { Vehiculo } from 'src/app/models/vehiculo';
import { identity } from 'rxjs';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedido: Pedido = {} as Pedido;
  pedidos: Pedido[];
  vehiculo: Vehiculo = {} as Vehiculo;
  vehiculos: Vehiculo[];
  formGroup: FormGroup;

  constructor(private authService: AuthService,private pedidoService: PedidoService, private formBuilder: FormBuilder, private vehiculoService: VehiculoService) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({

      id_vehiculo: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      detalle: ['', [Validators.required]],
     

    });
    this.formGroup.valueChanges.subscribe((val) => { console.log(val) });
  }

  clear(){
    this.pedido = {} as Pedido;
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


  ngOnInit() {
    this.getPedidos();
    this.getVehiculos();
  }
  getVehiculos() {
    this.pedidoService.getVehicles().subscribe((res: any) => {
      this.vehiculos = res;
      console.log(res)
    });
  }

  getVehiculo(id:number) {
    this.vehiculoService.getVehicle(id).subscribe((res: any) => {
      this.vehiculo = res;
      console.log(res)
    });
  }

  getPedidos() {
    this.pedidoService.getOrderByCliente().subscribe((res: any) => {
      this.pedidos = res;
      console.log(res)
    });
  }
  createPedido() {
    this.pedidoService.createPedido(this.pedido).subscribe((res: any) => {
      this.getPedidos();
    });
  }
}




