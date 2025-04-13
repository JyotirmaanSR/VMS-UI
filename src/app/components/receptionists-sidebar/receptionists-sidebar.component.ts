import { Component, ViewChild } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-receptionists-sidebar',
  templateUrl: './receptionists-sidebar.component.html',
  styleUrls: ['./receptionists-sidebar.component.css']
})
export class ReceptionistsSidebarComponent {
@ViewChild('logoutModal') logoutModal!: LogoutComponent;

  // Called when Logout menu is clicked
  openLogoutModal(event: Event) {
    event.preventDefault(); // Prevent link default behavior
    this.logoutModal.showModal(); // Show modal
  }
  
}
