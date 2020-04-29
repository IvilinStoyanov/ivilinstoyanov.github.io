import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      const myNavBar = {
          flagAdd: true,
          elements: [],
          init(elements) {
              this.elements = elements;
          },
          add() {
              if (this.flagAdd) {
                  for (const e of this.elements) {
                      document.getElementById(e).className += ' fixed-theme';
                  }
                  this.flagAdd = false;
              }
          },
          remove() {
              for (const e of this.elements) {
                  document.getElementById(e).className =
                          document.getElementById(e).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
              }
              this.flagAdd = true;
          }
      };
      /**
       * Init the object. Pass the object the array of elements
       * that we want to change when the scroll goes down
       */
      myNavBar.init(  [
          'header',
          'header-container',
          'header-items-container'
      ]);
      function offSetManager(){
          const yOffset = 0;
          const currYOffSet = window.pageYOffset;

          if (yOffset < currYOffSet) {
              myNavBar.add();
          }
          else if (currYOffSet == yOffset){
              myNavBar.remove();
          }

      }
      window.onscroll = function(e) {
          offSetManager();
      };
      offSetManager();

  }
}
