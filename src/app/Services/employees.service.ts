import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditEmployee } from '../Models/edit-employee.model';
import { AddEmployee } from '../Models/add-employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) {
  }

    url :string = "http://task.soft-zone.net/api/Employees/";

  
    getAllEmployees(){
      return this.httpClient.get(this.url + "getAllEmployees");
    }

    getEmpByID(emp_id : number){
      return this.httpClient.get(this.url + "getEmpByID/" + emp_id);
    }

    deleteEmpByID(emp_id: number) {
      return this.httpClient.get(this.url + "deleteEmpByID/"+ emp_id);
    }

    addEmployee(employee:AddEmployee) {
      return this.httpClient.post(this.url + "addEmployee" , employee);
    }

    editEmployee(employee : EditEmployee) {
      return this.httpClient.post(this.url + "editEmployee" , employee);
    }
}


