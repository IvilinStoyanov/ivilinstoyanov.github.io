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
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694809/photoshop/118412950_310707523529949_512597547460220876_n.jpg_pwzjrg.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694802/photoshop/119476217_4462437430495616_3924363412036315651_n.jpg_ua2ltn.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694820/photoshop/117820289_754243572094634_7923414399529040969_n.jpg_uzoue2.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694800/photoshop/120144539_176467690715297_5245875841384352767_n.jpg_gjynj9.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694814/photoshop/118211984_825185931219875_646820410573557730_n.jpg_nmkldm.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604695267/photoshop/92348143_528981351325711_1746605853357539189_n.jpg_zcmyl0.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694799/photoshop/122412270_672372490359256_8156050410271731220_n.jpg_ztk3db.jpg'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694805/photoshop/119066276_763835114470362_824795753472763697_n.jpg_djkchg.jpg'
      },

      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604695532/photoshop/android-min_wucpcg.jpg'
      }
    ];
  }

}
