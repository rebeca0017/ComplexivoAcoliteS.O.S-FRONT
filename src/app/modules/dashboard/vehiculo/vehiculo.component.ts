import { Component } from '@angular/core';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from '../../../models/vehiculo';
import { AuthService } from '../../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent {
  vehiculo: Vehiculo = {} as Vehiculo;
  vehiculos: Vehiculo[];
  formGroup: FormGroup;

  constructor(private authService: AuthService, private vehiculoService: VehiculoService, private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      placa: ['', [Validators.required, Validators.maxLength(6), Validators.minLength(5)]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      color: ['', [Validators.required]],

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
    this.getVehiculos();
  }

  getVehiculos() {
    this.vehiculoService.getVehicles().subscribe((res: any) => {
      this.vehiculos = res;
      console.log(res)
    });
  }
  createVehiculo() {
    this.vehiculoService.createVehicle(this.vehiculo).subscribe((res: any) => {
      this.getVehiculos();
    });
  }
}




