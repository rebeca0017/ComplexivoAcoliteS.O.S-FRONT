import { Component } from '@angular/core';
import { PedidoService } from './pedidos.service';

import { AuthService } from '../../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pedido } from 'src/app/models/pedido';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  pedido: Pedido = {} as Pedido;
  pedidos: Pedido[];
  formGroup: FormGroup;

  constructor(private authService: AuthService, private pedidoService: PedidoService, private formBuilder: FormBuilder) {
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

  showDetails = false;

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }


  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    this.pedidoService.getOrders().subscribe((res: any) => {
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




