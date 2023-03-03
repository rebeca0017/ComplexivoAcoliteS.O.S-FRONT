import { Component } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {

  vehiculos: Vehiculo[];

  constructor(private authService: AuthService, private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos() {
    this.vehiculoService.getVehicles().subscribe((res: any) => {
      this.vehiculos = res.vehicles;
    });
  }
}



