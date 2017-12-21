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
  users: User[];

  me: User;
  otherUser: User;

  //ngModel vars
  newExerciseName: string;

  constructor(private http: Http, private service: ExerciseService, private router: Router) { }

  ngOnInit() {
    if (this.service.me == null) {
      this.router.navigate(["/login"])
    }
    this.me = this.service.me;
    this.otherUser = this.service.me;
    this.users = this.service.users;
    setInterval(() => this.updateUsers(), 1000);
  }

  updateUsers() {
    this.http.get(this.service.apiRoot + "/tracker/users").subscribe(data => {
      this.users = data.json();
    })
  }

  completeExercise(e: MouseEvent, x: exercise, i: number) {
    e.preventDefault();
    let u: User = this.me;
    this.http.post(this.service.apiRoot + "/tracker/users/user/completeExercise", { x, i, u }).subscribe(data => {
      this.me = data.json();
    })
  }
  removeExercise(e: MouseEvent, x: exercise, i: number) {
    e.preventDefault();
    let u: User = this.me;
    this.http.post(this.service.apiRoot + "/tracker/users/user/removeExercise", { x, i, u }).subscribe(data => {
      this.me = data.json();
    })
  }
  stealExercise(e: MouseEvent, x: exercise, i: number) {
    e.preventDefault();
    let u: User = this.me;
    this.http.post(this.service.apiRoot + "/tracker/users/user/stealExercise", { x, i, u }).subscribe(data => {
      this.me = data.json();
    })
  }


  addExercise(e: MouseEvent) {
    e.preventDefault();

    if (this.newExerciseName) {
      let u: User = this.me;
      let x: string = this.newExerciseName;
      this.http.post(this.service.apiRoot + "/tracker/users/user/addExercise", { x, u }).subscribe(data => {
        this.me = data.json();
      })
    }
  }

  setOtherUser(e: MouseEvent, i: number) {
    this.otherUser = this.users[i];
  }

  logout(e: MouseEvent){
    let u: User = this.me;
    this.http.post(this.service.apiRoot + "/tracker/users/user/logout", {u}).subscribe(data => {
      this.me = data.json();
    })
  }

  // getExercises() {
  //   this.http.get(this.service.apiRoot + "/tracker/exercises").subscribe(data => {
  //     this.me.todoList = data.json();
  //   });
  // }

  //   this.http.post(this.service.apiRoot + "/tracker/users/user/completeExercise", { x, i, u }).subscribe( data => {

  //   });
  //   this.me.doneList.push(x);
  //   this.me.todoList.splice(i, 1);
  // }

  // removeExercise(e: MouseEvent, x: exercise, i: number) {
  //   e.preventDefault();
  //   let xIndex = this.me.doneList.indexOf(x);
  //   this.me.doneList.splice(xIndex, 1);
  // }

  // getUsers(e: MouseEvent) {
  //   this.http.get(this.service.apiRoot + "/tracker/users").subscribe(data => {
  //     this.Users = data.json();
  //   })
  // }

  // getUsersData(e: MouseEvent, i: number) {
  //   this.http.get(this.service.apiRoot + "/tracker/users").subscribe(data => {
  //     this.Users = data.json();
  //   })
  //   this.otherUser = this.Users[i];
  // }

  // addNewExercise(e: MouseEvent, s: string) {
  //   e.preventDefault();
  //   this.me.todoList.push({ name: this.newExercise })
  // }

}
