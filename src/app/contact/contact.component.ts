import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() { }

  socialLinks = [
    {
      value: 'muzammil.bilwani@hotmail.com',
      icon: 'fas  fa-envelope',
      link: 'mailto:muzammil.bilwani@hotmail.com'
    },
    {
      value: 'Karachi, Pakistan',
      icon: 'fas fa-map-marker',
      link: 'https://goo.gl/maps/WcuoS1ejpDQ2'
    },
    {
      value: 'muzammil.bilwani',
      icon: 'fab fa-facebook',
      link: 'https://www.facebook.com/muzammil.bilwani'
    },
    {
      value: 'muzammilbilwani',
      icon: 'fab fa-instagram',
      link: 'https://www.instagram.com/muzammilbilwani/'
    },
    {
      value: 'muzammilbilwani',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/muzammilbilwani/'
    },
    {
      value: '@BilwaniMuzammil',
      icon: 'fab fa-twitter',
      link: 'https://twitter.com/BilwaniMuzammil'
    },
    {
      value: 'Muzammil-Bilwani',
      icon: 'fab fa-github',
      link: 'https://github.com/Muzammil-Bilwani'
    }
  ];

  ngOnInit() { }
}
