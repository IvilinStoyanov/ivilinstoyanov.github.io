import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isSidebarOpen = false;

    theme: any = {
        type: 'light',
        checkbox: 'false'
    };

    menu: any = [];
    sidebar: any = [];

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', JSON.stringify(this.theme));
        }
        this.theme = JSON.parse(localStorage.getItem('theme'));
        this.loadStyle(this.theme.type + '.css');

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
        this.theme.checkbox = !this.theme.checkbox;
        if (!this.theme.checkbox) {
            this.theme.type = 'light';
            this.theme.checkbox = false;
            localStorage.setItem('theme', JSON.stringify(this.theme));
        }
        else {
            this.theme.type = 'dark';
            this.theme.checkbox = true;
            localStorage.setItem('theme', JSON.stringify(this.theme));

        }
        if (this.theme.type === 'light') {
            this.loadStyle(this.theme.type + '.css');

        }
        if (this.theme.type === 'dark') {
            this.loadStyle(this.theme.type + '.css');
        }
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
