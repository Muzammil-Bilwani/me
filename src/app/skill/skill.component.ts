import { Component, OnInit } from '@angular/core'
import * as moment from 'moment'
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  startWorking = new Date('06-06-2016');

  skills = {
    Frameworks_Libraries: ['ReactJs', 'Angular 2+/ JS', 'Vue', 'jQuery', 'Node.js', 'Express.js'],
    Front_End: ['CSS3', 'SASS', 'LESS'],
    Languages: ['JavaScript', 'Typescript'],
    Mobile_App_Development: ['React Native', 'Flutter', 'Ionic'],
    Version_Controlling: ['Git'],
    Databases: ['MongoDB', 'MySQL', 'Dgraph', 'Elastic Search'],
    Deployment_Cloud: ['AWS', 'Nginx', 'CI/CD', 'Serverless']
  };

  ngOnInit() {
  }

  getTime() {
    return moment(new Date(this.startWorking), 'YYYYMMDD').fromNow()
  }

}
