import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { 

  title = 'hello-world-app';// UC1 hello print

  message: string = 'Hello from BridgeLabz!'; //UC2 data binding 

  logourl:string='BL_logo_square_jpg.jpg'; //UC3 logo of bridgeLabz 

  logoUrl:string='BL_logo_square_jpg.jpg';//UC4 logo of bridgeLabz and click event
  openBridgeLabz(){window.open('https://www.bridgeLabz.com', '_blank')} 

  userName:string ='';
}
