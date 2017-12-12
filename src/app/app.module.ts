import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    HeaderComponent,
    ExercisesComponent,
    SignupComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent},
      {path: "exercises", component: ExercisesComponent},
      {path: "aboutus", component: AboutusComponent},
      {path: "signup", component: SignupComponent},
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
