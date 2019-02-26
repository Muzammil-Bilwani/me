import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  works = [{
    title: 'Check your bonds',
    description: `Automated prize bond checking application`,
    link: 'https://checkyourbonds.com',
  }];
  openSource = [
    {
      title: 'EXPRESS API Boiler Plate',
      demo: false,
      link: 'https://github.com/Muzammil-Bilwani/api-server-boilerplate',
    },
    {
      title: 'Github Analyzer',
      demo: 'https://git-analyze.stackblitz.io/',
      link: 'https://github.com/Muzammil-Bilwani/github-analyzer',
    },
    {
      title: 'Email Plugin',
      demo: false,
      link: 'https://github.com/Muzammil-Bilwani/email-engine',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  openLink(link) {
    if (link) {
      window.open(link, '_blank');
    }
  }

}
