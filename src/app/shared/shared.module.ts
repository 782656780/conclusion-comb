import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroUiModule} from './ng-zorro-ui.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgZorroUiModule
    ],
    exports: [
        NgZorroUiModule
    ]
})
export class SharedModule {}
