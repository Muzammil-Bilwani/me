import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  skills = {
    Frameworks_Libraries: ["Angular 2+/ JS", "ReactJs", "jQuery", "Ionic3", "Node.js", "Express.js", "SailsJs"],
    Front_End: ["HTML5", "CSS3", "SASS", "LESS"],
    Languages: ["C", "Java", "JavaScript", "Typescript", "SQL"],
    Version_Controlling: ["Git"],
    Deployment_Cloud: ['AWS EC2 ', 'S3', 'ngnix']
  }

}
