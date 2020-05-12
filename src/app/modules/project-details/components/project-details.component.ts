import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      detailsLink: '/projects/details/1',
      projectLink: 'https://cook4you.netlify.com',
      alt: 'photo',
      dateCreated: new Date('2018-11-2'),
      technologies: [
        { name: 'javascript', link: 'https://www.javascript.com' }
      ]
    },
    {
      id: 2,
      name: 'DateMe',
      subtext: 'ASP.NET Core + angular 8 application',
      img: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      detailsLink: '/projects/details/2',
      projectLink: '',
      alt: 'photo',
      dateCreated: new Date('2019-01-20'),
      technologies: [
        { name: 'asp.net', link: 'https://docs.microsoft.com/en-us/dotnet' },
        { name: 'angular 8', link: 'https://angular.io' },
        { name: 'html', link: 'https://www.w3schools.com/html' },
        { name: 'css', link: 'https://www.w3schools.com/css' }
      ],
      // tslint:disable-next-line: quotemark
      description: "DateMe is a platform for meeting people and finding true love. People can create and edit their profile, interact with eachother via chat. Users are able to uplaod pictures and create, like and comment on posts. Users also can like eachother's profiles and see who liked theirs."
    },
    {
      id: 3,
      name: 'Weatherspot',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/3',
      projectLink: 'https://weatherspot.netlify.com',
      alt: 'photo',
      dateCreated: new Date('2019-02-09'),
      technologies: [
        { name: 'javascript', link: 'https://www.javascript.com' },
        { name: 'html', link: 'https://www.w3schools.com/html' },
        { name: 'css', link: 'https://www.w3schools.com/css' }
      ]
    },
    {
      id: 4,
      name: 'Shopanoid',
      subtext: 'wordpress application',
      img: 'https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/4',
      projectLink: '',
      alt: 'photo',
      dateCreated: new Date('2019-04-07'),
      technologies: [
        { name: 'wordpress', link: 'https://wordpress.com' }
      ]
    },
    {
      id: 5,
      name: 'Budgety',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/5',
      projectLink: 'https://ivilinstoyanov.github.io/budgety',
      alt: 'photo',
      dateCreated: new Date('2018-10-24'),
      technologies: [
        { name: 'javascript', link: 'https://www.javascript.com' },
        { name: 'html', link: 'https://www.w3schools.com/html/' },
        { name: 'css', link: 'https://www.w3schools.com/css' }
      ]
    },
    {
      id: 6,
      name: 'Pig Game',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/6',
      projectLink: 'https://ivilinstoyanov.github.io/pig-game',
      alt: 'photo',
      dateCreated: new Date('2018-10-25'),
      technologies: [
        { name: 'javascript', link: 'https://www.javascript.com' },
        { name: 'html', link: 'https://www.w3schools.com/html/' },
        { name: 'css', link: 'https://www.w3schools.com/css' }
      ]
    },
  ];

  constructor(private route: ActivatedRoute) { }

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

}
