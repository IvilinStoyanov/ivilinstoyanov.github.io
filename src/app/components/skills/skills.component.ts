import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any = [
    { name: 'html', img: '../../../assets/skills/html1.png' },
    { name: 'css', img: '../../../assets/skills/css1.png' },
    { name: 'sass', img: '../../../assets/skills/sass.png' },
    { name: 'less', img: '../../../assets/skills/less1.png' },
    { name: 'bootstrap', img: '../../../assets/skills/bootstrap.png' },
    { name: 'javascript', img: '../../../assets/skills/javascript.png'},
    { name: 'typescript', img: '../../../assets/skills/typescript.png'},
    { name: 'jQuery', img: '../../../assets/skills/jquery.png' },
    { name: 'Angular', img: '../../../assets/skills/angular.png' },
    { name: 'c#', img: '../../../assets/skills/csharp.png' },
    { name: 'asp.net', img: '../../../assets/skills/asp.png' },
    { name: 'git', img: '../../../assets/skills/git.png' },
    { name: 'github', img: '../../../assets/skills/github.png' },
    { name: 'gitlab', img: '../../../assets/skills/gitlab.png' },
    { name: 'heroku', img: '../../../assets/skills/heroku.png' },
    { name: 'sql', img: '../../../assets/skills/sql.png' },
    { name: 'photoshop', img: '../../../assets/skills/photoshop.png' }
  ];

  queuedSkills: any = [
    { name: 'reactjs', img: '../../../assets/skills/react.png'},
    { name: 'redux', img: '../../../assets/skills/redux.png'},
    // { name: 'react native', '../../../assets/skills/.png'  },
    { name: 'node.js', img: '../../../assets/skills/nodejs.png' },
    { name: 'mongoDB', img: '../../../assets/skills/mongoDB.png' }
  ];

  constructor() {
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
  }

}
