import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User, list} from '../models/exercises';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExercisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
