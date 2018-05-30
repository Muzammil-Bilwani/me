import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  socialLinks = [
    {
      value: "muzammil.bilwani@hotmail.com",
      icon: "fa-envelope",
      link: ""
    },
    {
      value: "Karachi, Pakistan",
      icon: "fa-map-marker",
      link: ""
    },
    {
      value: "muzammil.bilwani",
      icon: "fa-facebook",
      link: "https://www.facebook.com/muzammil.bilwani"
    },
    {
      value: "muzammilbilwani",
      icon: "fa-instagram",
      link: "https://www.instagram.com/muzammilbilwani/"
    },
    {
      value: "muzammilbilwani",
      icon: "fa-linkedin",
      link: "https://www.linkedin.com/in/muzammilbilwani/"
    },
    {
      value: "@BilwaniMuzammil",
      icon: "fa-twitter",
      link: "https://twitter.com/BilwaniMuzammil"
    },
    {
      value: "Muzammil-Bilwani",
      icon: "fa-github",
      link: "https://github.com/Muzammil-Bilwani"
    }
  ];
}
