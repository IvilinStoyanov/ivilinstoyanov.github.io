import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any = [
    { name: 'html', value: 100 },
    { name: 'css', value: 100 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
