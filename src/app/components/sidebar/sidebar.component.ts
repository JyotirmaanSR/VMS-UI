import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('logoutModal') logoutModal!: LogoutComponent;

  // Called when Logout menu is clicked
  openLogoutModal(event: Event) {
    event.preventDefault(); // Prevent link default behavior
    this.logoutModal.showModal(); // Show modal
  }
  
}
