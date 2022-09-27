import { Component, OnInit } from '@angular/core';
import { ThemeStyles } from 'src/app/enums/theme-styles.enum';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  imagePath: string = '../../../assets/skills/';

  skills: any = [
    { name: 'html', img: 'html.png' },
    { name: 'css', img: 'css.png' },
    { name: 'sass', img: 'sass.png' },
    { name: 'less', img: 'less.png' },
    { name: 'bootstrap', img: 'bootstrap.png' },
    { name: 'javascript', img: 'javascript.png' },
    { name: 'typescript', img: 'typescript.png' },
    { name: 'jQuery', img: 'jquery.png' },
    { name: 'Angular', img: 'angular.png' },
    { name: 'c#', img: 'csharp.png' },
    { name: 'asp.net', img: 'asp.png', theme: true },
    { name: 'git', img: 'git.png' },
    { name: 'github', img: 'github.png', theme: true },
    { name: 'gitlab', img: 'gitlab.png' },
    { name: 'heroku', img: 'heroku.png' },
    { name: 'netlify', img: 'netlify.png' },
    { name: 'sql', img: 'sql.png' },
    { name: 'photoshop', img: 'photoshop.png' },
    { name: 'reactjs', img: 'react.png', queued: true },
    { name: 'redux', img: 'redux.png', queued: true },
    { name: 'node.js', img: 'nodejs.png', theme: true, queued: true },
    { name: 'mongoDB', img: 'mongodb.png', theme: true, queued: true }
  ];

  constructor(private themeService: ThemeService) {
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.skills.forEach(skill => {
        if (skill.theme)
          skill.img = this.changeThemeImageName(skill.img, theme);
      });
    });
  }

  changeThemeImageName(fileName: string, theme: string) {
    const regex = /\.[0-9a-z]+$/i;
    const extension = regex.exec(fileName).toString();

    let name = fileName.replace(extension, '');

    if (name.includes('-white'))
      name = name.replace('-white', '');

    return theme === ThemeStyles.Dark ? `${name}-white${extension}` : `${name}${extension}`;
  }
}
