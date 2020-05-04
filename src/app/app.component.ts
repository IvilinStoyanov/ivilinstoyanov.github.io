import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'site';

  constructor(private router: Router, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.ngxService.startLoader('loader');
    }
    if (event instanceof NavigationEnd) {
      this.ngxService.stopLoader('loader');
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.ngxService.stopLoader('loader');
    }
    if (event instanceof NavigationError) {
      this.ngxService.stopLoader('loader');
    }
  }
}
