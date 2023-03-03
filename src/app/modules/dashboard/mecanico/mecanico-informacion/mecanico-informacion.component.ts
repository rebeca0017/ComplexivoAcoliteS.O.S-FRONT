import { Component } from '@angular/core';
import { MecanicoService } from '../mecanico.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-mecanico-informacion',
  templateUrl: './mecanico-informacion.component.html',
  styleUrls: ['./mecanico-informacion.component.css']
})
export class MecanicoInformacionComponent {
  mecanico: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.authService.getUser().subscribe((res: any) => {
      this.mecanico = res;
    });
  }
  showDetails= false;

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
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
