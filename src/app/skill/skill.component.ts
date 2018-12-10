import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  startWorking = new Date('06-06-2016');
  constructor() { }

  skills = {
    Frameworks_Libraries: ['Angular 2+/ JS', 'ReactJs', 'Vue', 'jQuery', 'Ionic3', 'Node.js', 'Express.js', 'Sequelize'],
    Front_End: ['HTML5', 'CSS3', 'SASS', 'LESS'],
    Languages: ['C', 'Java', 'JavaScript', 'Typescript'],
    Version_Controlling: ['Git'],
    Databases: ['Mongo', 'MySQL'],
    Deployment_Cloud: ['AWS EC2 ', 'S3', 'Nginx', 'CI/CD']
  };

  ngOnInit() {
  }

  getTime() {
    return moment(new Date(this.startWorking), 'YYYYMMDD').fromNow();
  }

}
