import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
    isCollapsed = false;

    toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
    }
    constructor() { }

    ngOnInit(): void {
    }

}
