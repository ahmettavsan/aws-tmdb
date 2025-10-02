import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { MovieModule } from "./movie/movie.module";
import {
  provideRouter,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  Routes,
} from "@angular/router";
import { MovieComponent } from "./movie/ui/movie/movie.component";
import { SharedUiModule } from "./shared/shared-ui.module";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";

import { NgOptimizedImage, NgTemplateOutlet } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: MovieComponent,
  },
  { path: "home", component: MovieComponent },
  {
    path: "user/favorites",
    component: MovieComponent,
  },
  {
    path: "user/profile",
    component: SignUpComponent,
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  declarations: [AppComponent, ConfigurationComponent],
  imports: [
    NgOptimizedImage,
    BrowserModule,
    HttpClientModule,
    MovieModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SharedUiModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    NgTemplateOutlet,
    MatDialogModule,
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
