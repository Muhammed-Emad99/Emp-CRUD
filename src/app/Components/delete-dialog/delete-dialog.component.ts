import { Component, OnInit} from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  employeeId: number;
  employee: any;
  deleteForm: any = FormGroup;
  result: any;

  constructor(private employeeService: EmployeesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.employeeId = this.data;
  }

  ngOnInit(): void {
    // will log the entire data object

    this.deleteForm = this.formBuilder.group({
      id: '',
    })
  }

  onSubmit() {

    // stop here if form is invalid
    this.employeeService.deleteEmpByID(this.employeeId).subscribe((res) => {
      this.result = res;
    });
  }
}
