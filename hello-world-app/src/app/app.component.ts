import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent { 

  title = 'hello-world-app';// UC1 hello print

  message: string = 'Hello from BridgeLabz!'; //UC2 data binding 

  logourl:string='BL_logo_square_jpg.jpg'; //UC3 logo of bridgeLabz 

  logoUrl:string='BL_logo_square_jpg.jpg';//UC4 logo of bridgeLabz and click event
  openBridgeLabz(){window.open('https://www.bridgeLabz.com', '_blank')} 

  //userName:string =''; // UC5 input userName 


  userName:string =''; // UC6 input userName and it is valid or not --> if not valid show error 
  errorMessage:string =''; 

  isValidUserName(): void  
  { 
    const regexName=/^[A-Z][a-zA-Z]{2,}$/;  
    if(!regexName.test(this.userName)) 
    { 
      this.errorMessage='Name must start with a capital letter and have at least 3 letters.' ;
    } 
    else 
    { 
      this.errorMessage='';
    }
  }
   
}
