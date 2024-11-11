import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService, Hotel } from '../hotel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.css'
})

export class HotelFormComponent implements OnInit  {
  hotel: Hotel = { name: '', city: '' };
  isEditMode: boolean = false;

  constructor(
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('id');
    if (hotelId) {
      this.isEditMode = true;
      this.hotelService.getHotel(+hotelId).subscribe(hotel => this.hotel = hotel);
    }
  }

  saveHotel(): void {
    if (this.isEditMode) {
      this.hotelService.updateHotel(this.hotel).subscribe(() => this.router.navigate(['/']));
    } else {
      this.hotelService.addHotel(this.hotel).subscribe(() => this.router.navigate(['/']));
    }
  }
}
