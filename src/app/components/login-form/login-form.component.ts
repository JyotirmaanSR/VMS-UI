import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username = '';
  password = '';
  selectedRole = '';
  loginError = '';

  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    // Clear previous error
    this.loginError = '';

    if (!this.username || !this.password || !this.selectedRole) {
      this.loginError = 'All fields are required.';
      return;
    }

    const loginData = {
      username: this.username,
      password: this.password,
      role: this.selectedRole
    };

    this.http.post<any>('http://localhost:8080/vms/index.php/LoginController/login_user', loginData)
      .subscribe({
        next: (res) => {
          if (res.status) {
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
}
