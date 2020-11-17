import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.scss']
})
export class PhotoshopComponent implements OnInit {
  images: any[];

  constructor(private lightbox: Lightbox, private lightboxConfig: LightboxConfig) {
    this.lightboxConfig.disableScrolling = true;
    this.lightboxConfig.centerVertically = true;
   }

  ngOnInit() {
    this.images = [
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694809/photoshop/118412950_310707523529949_512597547460220876_n.jpg_pwzjrg.jpg',
        caption: 'portal to another dimension',
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694802/photoshop/119476217_4462437430495616_3924363412036315651_n.jpg_ua2ltn.jpg',
        caption: 'definitely not an ordinary book',
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694820/photoshop/117820289_754243572094634_7923414399529040969_n.jpg_uzoue2.jpg',
        caption: 'midnight walk'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694800/photoshop/120144539_176467690715297_5245875841384352767_n.jpg_gjynj9.jpg',
        caption: 'different planet'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694814/photoshop/118211984_825185931219875_646820410573557730_n.jpg_nmkldm.jpg',
        caption: 'observing the the galaxy'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604695267/photoshop/92348143_528981351325711_1746605853357539189_n.jpg_zcmyl0.jpg',
        caption: 'different version of me'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694799/photoshop/122412270_672372490359256_8156050410271731220_n.jpg_ztk3db.jpg',
        caption: 'the patronus'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604694805/photoshop/119066276_763835114470362_824795753472763697_n.jpg_djkchg.jpg',
        caption: 'glowing in the dark'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1605649233/photoshop/125249637_2657054311177882_5897392827649184385_n.jpg_z5ycwj.jpg',
        caption: 'escape house'
      },
      {
        src: 'https://res.cloudinary.com/portfolio1118/image/upload/v1604695532/photoshop/android-min_wucpcg.jpg',
        caption: 'android hologram'
      }
    ];
  }

  open(index: number): void {
    this.lightbox.open(this.images, index);
  }
}
