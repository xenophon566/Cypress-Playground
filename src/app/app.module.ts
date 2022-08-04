import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IframeNestedComponent } from './iframe-nested/iframe-nested.component';
import { HomeComponent } from './home/home.component';
import { IframeOneComponent } from './iframe-nested/iframe-one/iframe-one.component';
import { IframeTwoComponent } from './iframe-nested/iframe-two/iframe-two.component';

@NgModule({
    declarations: [AppComponent, IframeNestedComponent, HomeComponent, IframeOneComponent, IframeTwoComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
