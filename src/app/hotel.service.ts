import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


export interface Hotel {
  id?: number;
  name: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  // private apiUrl = 'https://localhost:4201/gethotels';
  private apiUrl = 'http://localhost:4201';
  private http = inject(HttpClient);

  getHome() {
    console.log("Service class home method : " + this.apiUrl);
    return this.http.get<any>(this.apiUrl);
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}/gethotels`);
  }

  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.apiUrl, hotel);
  }

  updateHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.apiUrl}/${hotel.id}`, hotel);
  }

  deleteHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
