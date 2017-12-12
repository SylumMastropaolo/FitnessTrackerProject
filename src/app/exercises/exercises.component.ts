import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, exercise} from '../models/exercises';
import {  Http } from '@angular/http';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExercisesComponent implements OnInit {
  apiroot: string;
  me: User;
  newExercise: string;

  constructor(private http: Http) {
    this.me = new User();
    this.apiroot = "http://localhost:3001";
    this.getExercises();
  }

  ngOnInit() {
  }

  getExercises(){
    this.http.get( this.apiroot + "/tracker/exercises" ).subscribe( data=> {
        this.me.todoList = data.json();
    });
  }

  completeExercise(e: MouseEvent, x: exercise, i: number){
    e.preventDefault();
    this.me.doneList.push(x);
    this.me.todoList.splice(i, 1);
    console.log(x.name + i);
  }

  addNewExercise(e: MouseEvent, s: string){
    e.preventDefault();
    this.me.todoList.push({name: this.newExercise})
  }

}
