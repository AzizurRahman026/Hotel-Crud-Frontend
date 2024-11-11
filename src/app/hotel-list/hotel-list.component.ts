import { Component, inject, OnInit } from '@angular/core';
import { HotelService, Hotel } from '../hotel.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule



@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})

export class HotelListComponent implements OnInit {

  hotels: Hotel[] = [];
  searchQuery: string = "";
  home: any;

 // constructor(private hotelService: HotelService) {}
 private hotelService = inject(HotelService)

  ngOnInit(): void {
    console.log("hello home1");
    this.loadHotels();
  }

  getHome(){
    console.log("getHome page called...");
    this.hotelService.getHotels()
      .subscribe({
        next: home => {
          this.home = home,
          console.log("Home Page")
        },
        error: error => console.log("error is : " + error["message"])
      });
  }

  loadHotels(): void {
    this.hotelService.getHotels().subscribe({
      next: hotel => {
        this.hotels = hotel,
        console.log("Hotel Page")
      },
      error: error => console.log("error is : " + error["message"])
    });
  }

  deleteHotel(id: any): void {
    this.hotelService.deleteHotel(id).subscribe(() => this.loadHotels());
  }

  searchHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels.filter(hotel => 
        hotel.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        hotel.city.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    });
  }
  
}
