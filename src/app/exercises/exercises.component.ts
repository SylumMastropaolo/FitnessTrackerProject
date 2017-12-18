import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, exercise } from '../models/exercises';
import { Http } from '@angular/http';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExercisesComponent implements OnInit {
  me: User;
  newExercise: string;
  Users: User[];
  otherUser: User;

  constructor(private http: Http, private service: ExerciseService, private router: Router) { }

  ngOnInit() {
    if (this.service.me == null) {
      this.router.navigate(["/login"])
    }
    this.me = this.service.me;
    this.otherUser = this.me;
    this.Users = this.service.users;
  }

  getExercises() {
    this.http.get(this.service.apiRoot + "/tracker/exercises").subscribe(data => {
      this.me.todoList = data.json();
    });
  }

  completeExercise(e: MouseEvent, x: exercise, i: number) {
    e.preventDefault();
    this.me.doneList.push(x);
    this.me.todoList.splice(i, 1);
    let u: User = this.me;

    this.http.post(this.service.apiRoot + "/tracker/users/user", { x, i, u }).subscribe( data => {

    });
  }

  removeExercise(e: MouseEvent, x: exercise, i: number) {
    e.preventDefault();
    this.me.doneList.splice(i, 1);
    console.log(x.name + i);
  }

  getUsers(e: MouseEvent) {
    this.http.get(this.service.apiRoot + "/tracker/users").subscribe(data => {
      this.Users = data.json();
    })
  }

  getUsersData(e: MouseEvent, i: number) {
    this.http.get(this.service.apiRoot + "/tracker/users").subscribe(data => {
      this.Users = data.json();
    })
    this.otherUser = this.Users[i];
  }

  addNewExercise(e: MouseEvent, s: string) {
    e.preventDefault();
    this.me.todoList.push({ name: this.newExercise })
  }

}
