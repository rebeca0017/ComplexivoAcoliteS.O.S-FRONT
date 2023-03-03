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
}
