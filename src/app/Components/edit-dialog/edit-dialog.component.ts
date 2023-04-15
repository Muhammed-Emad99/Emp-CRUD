import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { EditEmployee } from 'src/app/Models/edit-employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';


@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  employeeId: number;
  employee: any;
  editForm: any = FormGroup;
  submitted = false;
  result: any;

  constructor(private employeeService: EmployeesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.employeeId = this.data;
  }

  ngOnInit(): void {
    // will log the entire data object

    this.getSingleEmployee();
    this.editForm = this.formBuilder.group({
      id: '',
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      address: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(64),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ],
      ],
    });

  }

  getSingleEmployee() {
    this.employeeService.getEmpByID(this.employeeId).subscribe(res => {
      this.employee = res;

      this.editForm.patchValue({
        id: this.employee.empId,
        name: this.employee.empName,
        email: this.employee.empEmail,
        address: this.employee.empAddress,
        phone: this.employee.empPhone
      });
    })
  }
  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }

    let data = this.editForm.value;

    let Employee = new EditEmployee(
      data.id,
      data.name,
      data.email,
      data.address,
      data.phone
    );

    this.employeeService.editEmployee(Employee).subscribe((res) => {
      this.result = res;
    });
  }

}
