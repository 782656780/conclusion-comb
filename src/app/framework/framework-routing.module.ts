import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FrameworkComponent } from './framework.component';

export const routeConfig: Routes = [
    {
        path: '', component: FrameworkComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            // { path: 'index', component: HomePageComponent },   // 无首页，暂时跳转到信息管理列表
        ],
        // canActivateChild: [AuthGuard]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routeConfig)
    ]
})
export class FrameworkRoutingModule { }
