import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username = '';
  password = '';
  selectedRole = '';

  constructor(private router: Router) {}

  onLogin() {
    // You can add your auth logic here (API call, etc.)
    if (this.selectedRole === 'admin') {
      this.router.navigate(['/admin-dashboard']);
    } else if (this.selectedRole === 'employee') {
      this.router.navigate(['/dashboard']);
    } else if (this.selectedRole === 'reception') {
      this.router.navigate(['/receptiondashboard']);
    }
  }
}
