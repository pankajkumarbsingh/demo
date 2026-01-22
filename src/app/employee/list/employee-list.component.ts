import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../service/EmployeeService';
import { Employee } from '../../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
 employees: Employee[] = [];
constructor(private employeeService: EmployeeService,private router: Router) {
    
}
ngOnInit() {
  this.getEmployees();
}

getEmployees() {
    
  return this.employeeService.getEmployees().subscribe({
      next: data => this.employees = data,
      error: err => console.error(err)
    });
}
addEmployee() {
    debugger;
     this.router.navigate(['/add-employee']);
  }

  

  
}
