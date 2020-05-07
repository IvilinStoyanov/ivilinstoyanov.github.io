import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projects: any = [
    { id: 1, name: 'Cook4You', subtext: 'javascript application', img: 'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80', link: '' , alt: 'photo' },
    { id: 2, name: 'DateMe', subtext: 'ASP.NET + Angular 9 application', img: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', link: '' , alt: 'photo'},
    { id: 3, name: 'Weatherspot', subtext: 'javascript application', img: 'https://images.unsplash.com/photo-1514852451047-f8e1d1cd9b64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1112&q=80', link: '', alt: 'photo' },
    { id: 4, name: 'Shopanoid', subtext: 'wordpress application', img: 'https://images.unsplash.com/photo-1514997618358-2c490d913b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', link: '', alt: 'photo' },
    { id: 5, name: 'Budgety', subtext: 'javascript application', img: '../../../../../assets/thumbs/857204-min.jpg', link: '' },
    { id: 6, name: 'Pig Game', subtext: 'javascript application', img: 'https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', link: '', alt: 'photo' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
