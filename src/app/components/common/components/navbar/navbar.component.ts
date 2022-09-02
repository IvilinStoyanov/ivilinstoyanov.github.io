import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'src/app/services/theme.service';
import { ThemeStyles } from 'src/app/enums/theme-styles.enum';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isSidebarOpen = false;
    theme: any = {
        type: 'light'
    };
    menu: any = [];
    sidebar: any = [];

    constructor(@Inject(DOCUMENT) private document: Document, private themeService: ThemeService) { }

    ngOnInit() {
      this.loadTheme();

        this.menu = [
        { name: 'Home', link: '' },
        { name: 'Projects', link: '/projects', count: 6 },
        { name: 'Skills', link: '/skills' },
        { name: 'Resume', link: '/resume' },
        { name: 'Hobby', link: '/hobby' },
        { name: 'Contacts', link: '/contacts' }
    ];

        this.sidebar = [
        { name: 'Home', link: '', icon: 'icofont-ui-home' },
        { name: 'Projects', link: '/projects', icon: 'icofont-code-alt', count: 6 },
        { name: 'Skills', link: '/skills', icon: 'icofont-tools-alt-2' },
        { name: 'Resume', link: '/resume', icon: 'icofont-attachment' },
        { name: 'Hobby', link: '/hobby', icon: 'icofont-brand-adobe' },
        { name: 'Contacts', link: '/contacts', icon: 'icofont-mail' }
    ];
    }

    loadTheme() {
        if (localStorage.getItem('theme') == null) {
          localStorage.setItem('theme', JSON.stringify(this.theme));
      }

      this.theme = JSON.parse(localStorage.getItem('theme'));
      this.loadStyle(this.theme.type + '.css');
      this.themeService.changetheme(this.theme.type);
    }

    changeTheme() {
      this.theme.type = this.theme.type == ThemeStyles.Light ? ThemeStyles.Dark : ThemeStyles.Light;

      localStorage.setItem('theme', JSON.stringify(this.theme));
      this.loadStyle(this.theme.type + '.css');
      this.themeService.changetheme(this.theme.type);
    }

    loadStyle(styleName: string) {
        const head = this.document.getElementsByTagName('head')[0];

        const themeLink = this.document.getElementById(
            'client-theme'
        ) as HTMLLinkElement;
        if (themeLink) {
            themeLink.href = styleName;
        } else {
            const style = this.document.createElement('link');
            style.id = 'client-theme';
            style.rel = 'stylesheet';
            style.href = `${styleName}`;

            head.appendChild(style);
        }
    }

    toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    closeSidebar() {
        this.isSidebarOpen = false;
    }
}
