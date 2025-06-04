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
  submitted = false;

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
    this.submitted = true;

    if (this.loginForm.invalid) {
      alert('All fields are required.');
      return;
    }

    const loginData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      role_id: this.loginForm.value.role
    };

    this.service.post('/LoginController/login_user', loginData).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          const user = res.data;
          const role = user.role?.toLowerCase();

          // Save user details to localStorage
          localStorage.setItem('role', role);
          localStorage.setItem('emp_id', user.emp_id);
          localStorage.setItem('name', user.name);

          alert('Login Successful!');

          // Navigate based on role
          switch (role) {
            case 'admin':
              this.router.navigate(['/admin-dashboard']);
              break;
            case 'receptionist':
              this.router.navigate(['/receptiondashboard']);
              break;
            case 'employee':
              this.router.navigate(['/dashboard']);
              break;
            case 'security':
              this.router.navigate(['/security']);
              break;
            default:
              alert('Invalid role received from server.');
              break;
          }
        } else {
          alert(res.data || 'Login failed.');
        }
      },
      error: (err) => {
        console.error('Login API error:', err);
        alert('Server error occurred. Please try again later.');
      }
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  getrole() {
    this.service.post('LoginController/fetch_all_roles', {}).subscribe({
      next: (res: any) => {
        if (res.status === 'success') {
          this.role_data = res.data;
        } else {
          alert(res.data || 'Failed to fetch roles.');
        }
      },
      error: (err) => {
        console.error('Error fetching roles', err);
        alert('Could not fetch roles from the server.');
      }
    });
  }
}
