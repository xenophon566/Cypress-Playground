import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { DemoButtonsComponent } from "./demo-buttons/demo-buttons.component";
import { DemoFirebaseComponent } from "./demo-firebase/demo-firebase.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "home", component: HomeComponent },
            { path: "demo-buttons", component: DemoButtonsComponent },
            { path: "demo-firebase", component: DemoFirebaseComponent },
            { path: "", component: HomeComponent },
            { path: "**", redirectTo: "home" },
        ]),
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}
