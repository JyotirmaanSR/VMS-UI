import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-employee-form',
  templateUrl: './create-employee-form.component.html',
  styleUrls: ['./create-employee-form.component.css']
})
export class CreateEmployeeFormComponent {
  @Input() isVisible: boolean = false;
  @Output() onClose = new EventEmitter<void>();  // Emits when modal is closed

  departments: string[] = ['HR', 'Finance', 'IT', 'Marketing'];

  // Notify parent to close the form
  closeForm() {
    this.onClose.emit();
  }
}
