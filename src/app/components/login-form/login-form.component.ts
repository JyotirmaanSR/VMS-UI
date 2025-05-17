import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';
  role_data: any[] = [];


  constructor(
    private router: Router,
     private http: HttpClient,
     private fb: FormBuilder,
      private service: ApiService
    ) {
      this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

    ngOnInit() {
    this.getrole();
  }

  onLogin() {
    this.loginError = '';

    if (this.loginForm.invalid) {
      this.loginError = 'All fields are required.';
      return;
    }

    const loginData = this.loginForm.value;

    this.service.post(' /LoginController/login_user', loginData)
      .subscribe({
        next: (res:any) => {
          if (res.status == 'success') {
            alert(" Login Successful ! ")
            const role = res.data.role.toLowerCase();  
            switch (role) {
              case 'admin':
                this.router.navigate(['/admin-dashboard']);
                break;
              case 'employee':
                this.router.navigate(['/dashboard']);
                break;
              case 'reception':
                this.router.navigate(['/receptiondashboard']);
                break;
              default:
                this.loginError = 'Invalid role detected from server.';
            }
          } else {
            this.loginError = res.data || 'Login failed.';
          }
        },
        error: (err) => {
          console.error('Login API error:', err);
          this.loginError = 'Server error occurred. Please try again later.';
        }
      });
  }

    

    getrole() {
    this.service.post('LoginController/fetch_all_roles', {})
      .subscribe({
        next: (res: any) => {
          if (res.status === 'success') {
            this.role_data = res.data;
          } else {
            alert(res.data);
          }
        },
        error: (err) => {
          console.error('Error fetching roles', err);
        }
      });
  }

}
