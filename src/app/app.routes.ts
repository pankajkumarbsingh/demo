import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'employees', loadComponent: () => import('./employee/list/employee-list.component').then(m => m.EmployeeListComponent)},
    {path: 'add-employee', loadComponent: () => import('./employee/add/add-employee.component').then(m => m.AddEmployeeComponent)},
];
