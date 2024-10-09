import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: '../view/contact.html',
})
export class Contact{
  cover = 'https://img.freepik.com/free-vector/design-community-concept-illustration_114360-1244.jpg?t=st=1653758102~exp=1653758702~hmac=8f9a9cc229df1cabeef2a60def9ad05799a90d33b2a1bb1db1a2f6aca1572f57&w=826';
  title = 'Contact Angular Web Dev';
  description = 'Angular MVC web developer.';
  content = `
			Entre em contato conosco para atender às suas necessidades de desenvolvimento de sites modernos usando Angular, crie um site moderno com Angular conosco.`;
  phone = '+000000000000';
  wa = '+000000000000;
  tel = 'tel:+000000000000';
  was = 'https://wa.me/5527999369724';
  mail = 'rafalee.dev@gmail.com';
  email = 'mailto:rafalee.dev@gmail.com';
}
