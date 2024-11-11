import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'add', component: HotelListComponent },
    { path: 'edit/:id', component: HotelFormComponent },
];
