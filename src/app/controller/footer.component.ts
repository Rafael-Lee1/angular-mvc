import { Component, OnInit } from '@angular/core';
import { Footer } from '../model/footer.model';
@Component({
  selector: 'my-footer',
  templateUrl: '../view/widget/nav/footer.component.html',
})
export class FooterComponent implements OnInit {
  Footers: Footer[] = [
    new Footer('Angular MVC', '/'),
    new Footer('Built with Angular', 'https://angular.io'),
    new Footer('present by Rafael Lee', 'https://github.com/Rafael-Lee1'),
  ];

  constructor() {}
  ngOnInit() {}
}
