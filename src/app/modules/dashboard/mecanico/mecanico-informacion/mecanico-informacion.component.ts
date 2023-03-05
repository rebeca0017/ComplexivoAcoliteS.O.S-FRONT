import { Component } from '@angular/core';
import { MecanicoService } from '../mecanico.service';
import { AuthService } from '../../../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mecanico-informacion',
  templateUrl: './mecanico-informacion.component.html',
  styleUrls: ['./mecanico-informacion.component.css']
})
export class MecanicoInformacionComponent {
  mecanico: any;
  formGroup: FormGroup;

  constructor(private authService: AuthService, private mecanicoService: MecanicoService, private formBuilder: FormBuilder,) {
    this.initForm();
  }

  ngOnInit() {
    this.getProfile();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      contacto: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],

    });
    this.formGroup.valueChanges.subscribe((val) => { console.log(val) });
  }

  validateFormat(event) {
    let key;
    if (event.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
    } else {
      key = event.keyCode;
      key = String.fromCharCode(key);
    }
    const regex = /[0-9]|\./;
    if (!regex.test(key)) {
      event.returnValue = false;
      if (event.preventDefault) {
        event.preventDefault();
      }
    }
  }

  getProfile() {
    this.authService.getProfile().subscribe((res: any) => {
      this.mecanico = res.data.user;
      console.log(res)
    });
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
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

  updateUser() {
    this.mecanicoService.updateUser(this.mecanico).subscribe(
      (response) => {
        console.log('actualizado con exito');
      },
      (error) => {
        console.log('no se pudo actualizar el cliente');
      }
    );
  }

  public validador: any; //esta variable se la puede usar para realizar la validacion en el html del component

  validadorDeCedula(cedula: String) {
    let cedulaCorrecta = false;

    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {

        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
          console.log(suma + " suma" + coefValCedula[i]);
        }

        suma = Math.round(suma);

        //console.log(verificador);
        //console.log(suma);
        //console.log(digito);

        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
          cedulaCorrecta = true;
        } else if ((10 - (Math.round(suma % 10))) == verificador) {
          cedulaCorrecta = true;
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    this.validador = cedulaCorrecta;

  }
}
