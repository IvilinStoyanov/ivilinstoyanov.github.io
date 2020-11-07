import { Component, OnInit } from '@angular/core';
import * as p from 'particlesjs';
import { GlobalService } from '../common/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private globalService: GlobalService) {
    document.body.style.overflowX = 'hidden';
  }

  ngOnInit(): void {
    if (this.globalService.isParticleInvoked === true) {
      p.destroy();
    }

    p.init({
      selector: '.background',
      color: ['#d09c91', '#8e8e8e'],
      maxParticles: 200
    });
    this.globalService.isParticleInvoked = true;
  }
}
