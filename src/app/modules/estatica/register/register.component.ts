import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;

  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      terms_and_conditions: ['', [Validators.required]],
    });
    this.formGroup.valueChanges.subscribe((val) => {  console.log(val)});
  }

  ngOnInit(): void {}

  register(): void {
    
      this.authService
        .register(
          this.formGroup.value.name,
          this.formGroup.value.email,
          this.formGroup.value.password
        )
        .subscribe((res: any) => {
          if (res.status === 'success') {
            this.router.navigate(['/auth/login']);
          }
        });
    }
}
