import { Component, OnInit, Inject } from '@angular/core';
import { element } from 'protractor';
import { DOCUMENT } from '@angular/common';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isSidebarOpen = false;
    theme: any = {type: 'light', checkbox: 'false'};
    menu: any = [
        { name: 'Home', link: '' },
        { name: 'Projects', link: '/projects' },
        { name: 'Skills', link: '/skills' },
        { name: 'Contacts', link: '/contacts' }
    ];

    sidebar: any = [
        { name: 'Home', link: '', icon: 'icofont-ui-home' },
        { name: 'Projects', link: '/projects', icon: 'icofont-code-alt' },
        { name: 'Skills', link: '/skills', icon: 'icofont-tools-alt-2' },
        { name: 'Contacts', link: '/contacts', icon: 'icofont-mail' }
    ];

    constructor(@Inject(DOCUMENT) private document: Document) { }

    ngOnInit() {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', JSON.stringify(this.theme));
        }
        this.theme = JSON.parse(localStorage.getItem('theme'));
        this.loadStyle(this.theme.type + '.css');

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
                        document.getElementById(e).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                }
                this.flagAdd = true;
            }
        };
        /**
         * Init the object. Pass the object the array of elements
         * that we want to change when the scroll goes down
         */
        myNavBar.init([
            'header',
            'header-container',
            'header-items-container'
        ]);
        function offSetManager() {
            const yOffset = 0;
            const currYOffSet = window.pageYOffset;

            if (yOffset < currYOffSet) {
                myNavBar.add();
            }
            else if (currYOffSet == yOffset) {
                myNavBar.remove();
            }

        }
        window.onscroll = function (e) {
            offSetManager();
        };
        offSetManager();

    }

    loadTheme() {
        /* set/change theme */
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
}
