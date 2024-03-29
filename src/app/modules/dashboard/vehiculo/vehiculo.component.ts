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
  title: string;

  constructor(private authService: AuthService, private vehiculoService: VehiculoService, private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      placa: ['', [Validators.required, Validators.maxLength(7), Validators.minLength(5)]],
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      color: ['', [Validators.required]],

    });
    this.formGroup.valueChanges.subscribe((val) => { console.log(val) });
  }


  submit(){
    if(this.vehiculo.id){
      this.updateVehiculo();
    }else{
      this.createVehiculo();
    }
  }

  clear(){
    this.vehiculo = {} as Vehiculo;
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
    if(!this.vehiculo.id){
      this.title="Crear Vehículo"
    }
  }
  closePopup() {
    this.displayStyle = "none";
  }

  displayStyleOK = "none";
  openPopupOK() {
    this.displayStyleOK = "block";
  }

  closePopupOK() {
    this.displayStyleOK = "none";
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

  getVehiculo(id:number) {
    this.vehiculoService.getVehicle(id).subscribe((res: any) => {
      this.vehiculo = res;
      this.title="Editar Vehículo"
      console.log(res)
    });
  }

  createVehiculo() {
    this.vehiculoService.createVehicle(this.vehiculo).subscribe((res: any) => {
      this.getVehiculos();
    });
  }

  updateVehiculo() {
    console.log(this.vehiculo)
    this.vehiculoService.updateVehicle(this.vehiculo).subscribe(
      (response) => {
        console.log('actualizado con exito')
        this.getVehiculos();
      },

    );
  }
}




