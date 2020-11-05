import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.scss']
})
export class PhotoshopComponent implements OnInit {
  Images: any[];

  constructor() { }

  ngOnInit() {
    this.Images = [
      {
        src: 'https://cdn.pixabay.com/photo/2020/09/17/11/37/fantasy-5578844_1280.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/09/17/11/31/book-5578836_1280.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/09/17/11/39/fantasy-5578855_960_720.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/09/26/15/01/fantasy-5604313_960_720.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/09/17/11/44/fantasy-5578867_960_720.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/10/24/13/12/fantasy-5681505_960_720.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/09/21/18/08/fantasy-5590898_1280.jpg'
      },
      {
        src: 'https://cdn.pixabay.com/photo/2020/10/03/14/07/android-hologram-5623624_960_720.jpg'
      }
    ];
  }

}
