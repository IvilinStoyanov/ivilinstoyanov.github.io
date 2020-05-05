import { Component, OnInit } from '@angular/core';
import * as p from 'particlesjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onload = () =>
      p.init({
        selector: '.background',
        color: ['#d09c91', '#8e8e8e'],
        maxParticles: 200
      });
    }
  }
