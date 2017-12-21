import { Injectable } from '@angular/core';
import { User, exercise } from './exercises';
import { Router } from '@angular/router'
import { Http } from '@angular/http';

declare var window: any;
declare var FB: any;

@Injectable()
export class ExerciseService {

  apiRoot: string;
  me: User;
  users: User[];

  constructor(private http: Http, private router: Router) {
    this.apiRoot = "//localhost:3001";

    window.fbAsyncInit = function () {
      FB.init({
        appId: '1959792190945453',
        cookie: true,
        xfbml: true,
        version: 'v2.11'
      });

      FB.AppEvents.logPageView();

    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = <HTMLScriptElement>d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  login(name: string, password: string) {
    this.http.post(this.apiRoot + "/tracker/users/newUser", { name, password }).subscribe(data => {
      this.me = data.json();
      //this.me.todoList.push({ name: "Cardio" }, { name: "Stretching" }, { name: "Weight Training" });
      // let u: User = this.me;
      // this.http.post(this.apiRoot + "/tracker/exercises", { u }).subscribe(data => {
      //   //this.me.todoList = data.json();
      // });
      this.router.navigate(["exercises"]);
    },
      err => {
        console.log(err);
      },
      () => { }
    );
  }
  loginFB() {
    FB.login((response: any) => {
      if (response.authResponse) {
        console.log(response);

        FB.api('/me?fields=name,email,picture', (response: any) => {
          console.log(response);
          this.login(response.name, 'password');
        });

      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    }, { scopes: 'email,user_photos,user_posts' });
  }
}
