import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
   standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

    addEmployee() {
     this.router.navigate(['/add-employee']);
  }
  viewEmployees() {
     this.router.navigate(['/employees']);
  }


  
}
