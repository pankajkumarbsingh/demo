import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './employee/login/login.component';
import { Router } from '@angular/router';
import { AuthService } from './service/AuthService';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular20-app');
  constructor(private router: Router,public authService: AuthService) {}

}
