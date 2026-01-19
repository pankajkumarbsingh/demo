import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './employee/add/add-employee.component';
import { EmployeeListComponent } from './employee/list/employee-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [
    RouterOutlet,
    AddEmployeeComponent,
    EmployeeListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular20-app');
  constructor(private router: Router) {}
  addEmployee() {
     this.router.navigate(['/add-employee']);
  }
  viewEmployees() {
     this.router.navigate(['/employees']);
  }
}
