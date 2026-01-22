import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './../model/employee.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 private baseUrl = `${environment.apiUrl}Employees`;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    //this is for testing commit
    return this.http.get<Employee[]>(this.baseUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }
}
