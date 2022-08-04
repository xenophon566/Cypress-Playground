import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IframeNestedComponent } from './iframe-nested/iframe-nested.component';
import { IframeOneComponent } from './iframe-nested/iframe-one/iframe-one.component';
import { IframeTwoComponent } from './iframe-nested/iframe-two/iframe-two.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'iframeNested',
        component: IframeNestedComponent,
    },
    {
        path: 'iframe-one',
        component: IframeOneComponent,
    },
    {
        path: 'iframe-two',
        component: IframeTwoComponent,
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
