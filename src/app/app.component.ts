import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelService, Hotel } from './hotel.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HotelListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected this line...
})
export class AppComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe((hotels) => {
      this.hotels = hotels;
    });
  }
}

