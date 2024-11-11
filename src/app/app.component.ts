import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HotelListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected this line...
})

export class AppComponent {
  title: string = "Frontend Code";
}
