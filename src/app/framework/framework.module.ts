import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FrameworkRoutingModule } from './framework-routing.module';
import { FrameworkComponent } from './framework.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        FrameworkComponent,
        TopbarComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NzLayoutModule,
        NzMenuModule,
        NzToolTipModule,
        NzIconModule,
        FrameworkRoutingModule
    ]
})
export class FrameworkModule { }
