import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
   copyright : string |undefined; 

  constructor() { }

  ngOnInit(): void {
    const year =  new Date().getFullYear().toString();

    this.copyright = `Wszelkie prawa zastrzeżone ${year}`;
  }

}
