import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-department-action-renderer',
  templateUrl: './department-action-renderer.component.html',
  styleUrls: ['./department-action-renderer.component.css']
})
export class DepartmentActionRendererComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  onEdit() {
    this.params.onEdit(this.params.data);
  }
  

  onDelete() {
    this.params.onDelete(this.params.data);
  }
  
}
