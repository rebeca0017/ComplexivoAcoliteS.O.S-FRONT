import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AuthTokenDecoder } from '../../../auth/auth-token-decoder';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide = true;
  rotate = 'start';
  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authTokenDecoder: AuthTokenDecoder
  ) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      terms_and_conditions: [null, [Validators.required]],
    });
    this.formGroup.valueChanges.subscribe((val) => {  console.log(val)});
  }

  ngOnInit(): void {}

  login(): void {
    
      this.authService
        .login(this.formGroup.value.email, this.formGroup.value.password)
        .subscribe((res: any) => {
          if (res.status === 'success') {
            const role = this.authTokenDecoder.decodeToken(res.data.accessToken).role;
            console.log(res);
            if (role === 'admin') {
              this.router.navigate(['/admin']);
            } else if (role === 'mecanico'){
              this.router.navigate(['/mecanico']);
            }else if (role === 'cliente'){
              this.router.navigate(['/cliente']);
            }
          }
        });
    
  }
}
