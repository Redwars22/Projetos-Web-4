import { Component } from '@angular/core';
import { author } from '../main';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  appAuthor = author;

  constructor() {}
}
