import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projects: any = [
    { id: 1, name: 'Cook4You', subtext: 'javascript application', img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', link: '' , alt: 'photo' },
    { id: 2, name: 'DateMe', subtext: 'ASP.NET + Angular 9 application', img: 'https://images.unsplash.com/photo-1518104593124-ac2e82a5eb9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', link: '' , alt: 'photo'},
    { id: 3, name: 'Weatherspot', subtext: 'javascript application', img: '../../../../../assets/projects/weatherspot-min.jpg', link: '', alt: 'photo' },
    { id: 4, name: 'Shopanoid', subtext: 'wordpress application', img: 'https://images.unsplash.com/photo-1526745925052-dd824d27b9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', link: '', alt: 'photo' },
    { id: 5, name: 'Budgety', subtext: 'javascript application', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', link: '' },
    { id: 6, name: 'Pig Game', subtext: 'javascript application', img: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', link: '', alt: 'photo' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
