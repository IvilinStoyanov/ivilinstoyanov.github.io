import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
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
      alt: 'photo'
    },
    {
      id: 2,
      name: 'DateMe',
      subtext: 'ASP.NET + Angular 9 application',
      img: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
      detailsLink: '/projects/details/2',
      projectLink: '',
      alt: 'photo'
    },
    {
      id: 3,
      name: 'Weatherspot',
      subtext: 'javascript application',
      img: '../../../../../assets/projects/weatherspot-min.jpg',
      detailsLink: '/projects/details/3',
      projectLink: 'https://weatherspot.netlify.com',
      alt: 'photo'
    },
    {
      id: 4,
      name: 'Shopanoid',
      subtext: 'wordpress application',
      img: 'https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/4',
      projectLink: '',
      alt: 'photo'
    },
    {
      id: 5,
      name: 'Budgety',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/5',
      projectLink: 'https://ivilinstoyanov.github.io/budgety',
      alt: 'photo'
    },
    {
      id: 6,
      name: 'Pig Game',
      subtext: 'javascript application',
      img: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
      detailsLink: '/projects/details/6',
      projectLink: 'https://ivilinstoyanov.github.io/pig-game',
      alt: 'photo'
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
