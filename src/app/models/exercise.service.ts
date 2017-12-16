import { Injectable } from '@angular/core';
import {User, exercise} from './exercises';
import { Router} from '@angular/router'
import { Http } from '@angular/http';

@Injectable()
export class ExerciseService {

  apiRoot: string;
  user: User;

  constructor(private http: Http, private router: Router) { 
    this.apiRoot = "//localhost:3001";
  }

  login(name: string, password: string){
    console.log(name + password)
    this.user.name=name;
    this.router.navigate(["exercises"]);

  }

}
