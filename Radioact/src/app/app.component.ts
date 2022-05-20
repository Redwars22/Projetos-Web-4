import { Component, VERSION, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    let isFirstTime = localStorage.getItem('isFirstTime');
    if(isFirstTime === null || isFirstTime == 'true'){
      localStorage.setItem('isFirstTime', 'false');
      Swal.fire({
        title: 'Hi'
      });
    }
  }
}
