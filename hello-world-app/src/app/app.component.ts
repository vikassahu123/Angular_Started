import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 

  title = 'hello-world-app';// UC1 hello print

  message: string = 'Hello from BridgeLabz!'; //UC2 data binding 

  logourl:string='BL_logo_square_jpg.jpg'; //UC3 logo of bridgeLabz
}
