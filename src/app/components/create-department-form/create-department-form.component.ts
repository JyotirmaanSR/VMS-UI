import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-department-form',
  templateUrl: './create-department-form.component.html',
  styleUrls: ['./create-department-form.component.css']
})
export class CreateDepartmentFormComponent implements OnInit {
  departmentForm!: FormGroup;
  errorMsg = '';
  successMsg = '';
  submitted = false;

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(private fb: FormBuilder, private service: ApiService) {}

  ngOnInit(): void {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  submitForm() {

    this.submitted = true;

    if (this.departmentForm.invalid) {
      // this.departmentForm.markAllAsTouched();
      alert("Fill Department Name !")
      return;
    }

    let formData : {name : any}={name : this.departmentForm.value.name};

    this.service.post('DepartmentController/create_department', formData)
    .subscribe((res: any) => {
      // next: (res) => {
        if (res.status) {
          this.successMsg = 'Department created successfully';
          this.departmentForm.reset();
        } else {
          alert(res.data);
        }
      // },
      // error: (err) => {
      //   this.errorMsg = 'Server error';
      // }
    });
  }
}
