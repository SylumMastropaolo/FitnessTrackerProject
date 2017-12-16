import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ExerciseService } from './models/exercise.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    HeaderComponent,
    ExercisesComponent,
    SignupComponent,
    AboutusComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "home", component: IndexComponent},
      {path: "exercises", component: ExercisesComponent},
      {path: "aboutus", component: AboutusComponent},
      {path: "signup", component: SignupComponent},
      {path: "login", component: LoginComponent},
      {path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
