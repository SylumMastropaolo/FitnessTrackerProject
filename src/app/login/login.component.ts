import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  typeahead: string[] = ['test'];

  search: string;

  constructor(private http: Http, private service: ExerciseService) {

  }

  ngOnInit() {
  }

  login() {
    this.service.login(this.username, this.password);
  }
  loginFB() {
    this.service.loginFB();
  }

  stateSearch(e: MouseEvent) {
    e.preventDefault();
    console.log(this.search);
    let search = this.search;
    this.http.post(this.service.apiRoot + "/tracker/states", { search }).subscribe(data => {
      this.typeahead = data.json();
    })
  }
}
