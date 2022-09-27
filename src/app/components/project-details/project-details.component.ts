import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  id: number;
  projectDetails: any = {};
  projects: any = [
    {
      id: 1,
      name: 'Cook4You',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      repoLink: 'https://github.com/IvilinStoyanov/cook4you',
      projectLink: 'https://cook4you.netlify.com',
      alt: 'photo',
      dateCreated: new Date('2018-11-2'),
      technologies: [
        { name: 'html', link: 'https://www.w3schools.com/html' },
        { name: 'css', link: 'https://www.w3schools.com/css' },
        { name: 'javascript', link: 'https://www.javascript.com' }
      ],
      description: 'Cook4You is javascript web application working with RESTful API to provide you unique recipes.'
    },
    {
      id: 2,
      name: 'Twiply',
      subtext: 'ASP.NET Core + angular 11 application',
      img: 'https://images.unsplash.com/photo-1603145733146-ae562a55031e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      repoLink: 'https://github.com/IvilinStoyanov/Twiply',
      projectLink: '',
      alt: 'photo',
      dateCreated: new Date('2019-01-20'),
      technologies: [
        { name: 'asp.net', link: 'https://docs.microsoft.com/en-us/dotnet' },
        { name: 'angular 11', link: 'https://angular.io' },
        { name: 'html', link: 'https://www.w3schools.com/html' },
        { name: 'css', link: 'https://www.w3schools.com/css' }
      ],
      // tslint:disable-next-line: quotemark
      description: "Twiply is a social platform. People can create and edit their profile, interact with eachother via chat. Users are able to uplaod pictures and create, like and comment on posts. Users also can like eachother's profiles and see who liked theirs and much more."
    },
    {
      id: 3,
      name: 'Weatherspot',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      repoLink: 'https://github.com/IvilinStoyanov/weatherspot',
      projectLink: 'https://weatherspot.netlify.com',
      alt: 'photo',
      dateCreated: new Date('2019-02-09'),
      technologies: [
        { name: 'javascript', link: 'https://www.javascript.com' },
        { name: 'html', link: 'https://www.w3schools.com/html' },
        { name: 'css', link: 'https://www.w3schools.com/css' }
      ],
      description: 'Weatherspot is javascript web application working with RESTful API so you can be up to date with the weather around.'
    },
    {
      id: 4,
      name: 'Zymio',
      subtext: 'react application with nodejs and mongodb',
      img: 'https://images.unsplash.com/photo-1589187775328-882e91b3db4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      repoLink: 'https://github.com/IvilinStoyanov/Zymio',
      projectLink: 'https://zymio-me.herokuapp.com',
      alt: 'photo',
      dateCreated: new Date('2022-09-08'),
      technologies: [
        { name: 'react', link: 'https://reactjs.org' },
        { name: 'nodejs', link: 'https://nodejs.org/' },
        { name: 'expressjs', link: 'https://expressjs.com/' },
        { name: 'mongodb', link: 'https://www.mongodb.com/' }
      ],
      description: 'Zymio will help you to collect the feedback.'
    },
    {
      id: 5,
      name: 'Budgety',
      subtext: 'angular 9 application',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      repoLink: 'https://github.com/IvilinStoyanov/budgety',
      projectLink: 'https://budgety-me.netlify.app',
      alt: 'photo',
      dateCreated: new Date('2018-10-24'),
      technologies: [
        { name: 'html', link: 'https://www.w3schools.com/html/' },
        { name: 'css', link: 'https://www.w3schools.com/css' },
        { name: 'javascript', link: 'https://www.javascript.com' }
      ],
      description: 'Budgety is simple javascript web application to calculate your monthly budget.'
    },
    {
      id: 6,
      name: 'Pig Game',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1570303363992-7f95ee20ebdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      repoLink: 'https://github.com/IvilinStoyanov/pig-game',
      projectLink: 'https://ivilinstoyanov.github.io/pig-game',
      alt: 'photo',
      dateCreated: new Date('2018-10-25'),
      technologies: [
        { name: 'html', link: 'https://www.w3schools.com/html/' },
        { name: 'css', link: 'https://www.w3schools.com/css' },
        { name: 'javascript', link: 'https://www.javascript.com' }
      ],
      description: 'Pig Game is javascript web application based on the dice game.'
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    document.body.style.overflow = 'auto';
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getDetailsForProject(this.id);
  }

  getDetailsForProject(id: number) {
    this.projects.forEach(element => {
      if (id === element.id) {
        this.projectDetails = element;
      }
    });
  }

  navigateBack(id: number) {
    this.getDetailsForProject(id - 1);
    this.router.navigate(['projects/details/', id - 1]);

  }

  navigateNext(id: number) {
    this.getDetailsForProject(id + 1);
    this.router.navigate(['projects/details/', id + 1]);
  }
}
