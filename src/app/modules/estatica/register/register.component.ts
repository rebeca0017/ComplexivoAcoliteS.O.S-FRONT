import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { RoleService } from './role.service';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  roles: Role[] = [];

  formGroup: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private roleService: RoleService
  ) {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: [null, [Validators.required]],
      terms_and_conditions: ['', [Validators.required]],
    });
    this.formGroup.valueChanges.subscribe((val) => { console.log(val) });
  }

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles(): void {
    this.roleService.getRoles().subscribe((res: any) => {
      if (res.status == 'success') {
        this.roles = res.data.roles;
      }
    });
  }

  register(): void {
    this.authService
      .register(
        this.formGroup.value.name,
        this.formGroup.value.email,
        this.formGroup.value.role,
        this.formGroup.value.password
      )
      .subscribe((res: any) => {
        if (res.status === 'success') {
          this.router.navigate(['/login']);
        }
      });
  }
}
