import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../models/exercise.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;

  constructor(private service: ExerciseService) {

  }

  ngOnInit() {
  }

  login(){
    this.service.login(this.username, this.password);
  }
  loginFB() {
    this.service.loginFB();
  }

}
