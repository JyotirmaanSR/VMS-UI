import { Component, ViewChild } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
@ViewChild('logoutModal') logoutModal!: LogoutComponent;

  // Called when Logout menu is clicked
  openLogoutModal(event: Event) {
    event.preventDefault(); // Prevent link default behavior
    this.logoutModal.showModal(); // Show modal
  }
}
