import { Component } from '@angular/core';
import { EmployeeService } from '../../service/EmployeeService';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {

  name!: string;
  salary!: number;
    message: any = '';

  constructor(private employeeService: EmployeeService,private router: Router) {}

  addEmployee() {
    
    this.employeeService.addEmployee({
      name: this.name,
      salary: this.salary
    }).subscribe((data: any) => {
        this.message = data.message;
        this.router.navigate(['/employees']);
     console.log('Employee added:', data);
      this.name = '';
      this.salary = 0;
      
    });
    
  }
}
