// app.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string

  ngOnInit() {
    // Initialization logic here, if needed
    console.log('Component initialized');
  }

  onSubmit() {
    // Handle form submission logic here
    if (this.username === 'example' && this.password === 'password') {
      console.log('Login successful');
      // You can redirect to another page or perform other actions on successful login
    } else {
      console.log('Login failed. Please check your username and password.');
      // You can show an error message or perform other actions on failed login
    }
  }
}
