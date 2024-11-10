import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'gethotels', component: AppComponent},
    {path: '**', component: AppComponent, pathMatch: 'full'}
];
