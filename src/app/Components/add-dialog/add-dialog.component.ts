import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AddEmployee } from 'src/app/Models/add-employee.model';
import { EmployeesService } from 'src/app/Services/employees.service';


@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent {
  editForm: any = FormGroup;
  submitted = false;
  result: any;

  constructor(private employeeService: EmployeesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // will log the entire data object

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

    let Employee = new AddEmployee(
      data.id,
      data.name,
      data.email,
      data.address,
      data.phone
    );

    this.employeeService.addEmployee(Employee).subscribe((res) => {
      this.result = res;
    });
  }
}
