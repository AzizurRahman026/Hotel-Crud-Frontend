import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected this line
})
export class AppComponent implements OnInit {
  http = inject(HttpClient);
  title = 'Hotel-Crud-Frontend';

  Text: any;
  Hotels: any;

  ngOnInit(): void {
    // this.http.get("http://localhost:4201", { responseType: 'text' }).subscribe({
    //   next: response => this.Text = response,
    //   error: error => console.log("Error is: ", error),
    //   complete: () => console.log("Request has been completed")
    // });

    this.http.get("http://localhost:4201/gethotels").subscribe({
      next: response => this.Hotels = response,
      error: error => console.log("Error is: ", error),
      complete: () => console.log("Request has been completed")
    });
  }


  
  
}
