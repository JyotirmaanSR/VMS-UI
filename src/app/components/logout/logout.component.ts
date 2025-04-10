import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  show = false;

  constructor(private router: Router) {}

  // Call this to open the modal
  showModal() {
    this.show = true;
  }

  // Call this to hide the modal
  hideModal() {
    this.show = false;
  }

  // Confirm logout and redirect
  confirmLogout() {
    this.router.navigate(['/login']);
  }
}
