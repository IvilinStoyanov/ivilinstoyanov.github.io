import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any = [
    { name: 'html', value: 100 },
    { name: 'css', value: 100 },
    { name: 'less/sass', value: 100 },
    { name: 'boostrap', value: 100 },
    { name: 'javascript', value: 100 },
    { name: 'jQuery', value: 100 },
    { name: 'Angular', value: 100 },
    { name: 'c#', value: 100 },
    { name: 'asp.net', value: 90 },
    { name: 'git', value: 100 },
    { name: 'sql', value: 90 },
    { name: 'wordpress', value: 80 },
    { name: 'photoshop', value: 90 }
  ];

  queuedSkills: any = [
    { name: 'reactjs', value: 0 },
    { name: 'react native', value: 0 },
    { name: 'node.js', value: 0 },
  ];

  constructor() {
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
  }

}
