import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrameworkModule } from './framework/framework.module';

import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FrameworkModule
    ],
    providers: [
        {
            provide: NZ_I18N,
            useValue: zh_CN
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }