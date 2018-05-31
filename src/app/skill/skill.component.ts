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

  skills = `{
    \nFrameworks_Libraries: ["Angular 2+/ JS", "ReactJs", "jQuery", "Ionic3", "Node.js", "Express.js", "SailsJs"],
    \nFront_End: ["HTML5", "CSS3", "SASS", "LESS"],
    \nLanguages: ["C", "Java", "JavaScript", "Typescript", "SQL"],
    \nVersion_Controlling: ["Git"],
  \n}`

}
