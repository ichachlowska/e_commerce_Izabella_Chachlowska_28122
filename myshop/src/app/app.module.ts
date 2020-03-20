import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, LandingComponent } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/landing", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
