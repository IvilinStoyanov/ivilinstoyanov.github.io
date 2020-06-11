import { Component, OnInit } from '@angular/core';
import { GlobalService } from './modules/common/services/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient } from '@angular/common/http';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  api = 'https://api.github.com/users/';
  title = 'Ivilin Stoyanov';

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private ngxService: NgxUiLoaderService, private globalService: GlobalService, private http: HttpClient) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });

    // this.getAllStarredRepos();
  }

  getAllStarredRepos() {
    this.http.get(this.api + 'ivilinstoyanov/starred').subscribe(data => this.filterOwnedRepos(data));
  }

  filterOwnedRepos(data: any) {
    const projects: any = [];
    data.forEach(element => {
      if (element.owner.login === 'IvilinStoyanov') {
        projects.push(element);
      }
    });
    this.globalService.projects = projects;
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
