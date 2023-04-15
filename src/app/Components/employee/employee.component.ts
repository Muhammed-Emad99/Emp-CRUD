import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeesData: any = [];
  p: any;
  employees: any = [];
  title: string = "Manage Employees"


  constructor(private empService: EmployeesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.getAllEmployees();
  }



  getAllEmployees() {
    this.empService.getAllEmployees().subscribe((res) => {
      this.employeesData = res;
    })
  }

  openEditDialog(employeeID : number) {

    const dialogRef = this.dialog.open(EditDialogComponent, {
      width : '500px',
      data: employeeID
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllEmployees();
    });
  }

  openDeleteDialog(employeeID: number) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px',
      data: employeeID
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllEmployees();
    });
  }

  openAddDialog() {

    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllEmployees();
    });
  }

}

