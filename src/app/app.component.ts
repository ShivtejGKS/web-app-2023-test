import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'myUsername' && this.password === 'myPassword') {
      // User is authenticated

      console.log("Login Successful")
    } else {
      // Authentication failed
      console.log(" login failed")
      
    }
  }
}
