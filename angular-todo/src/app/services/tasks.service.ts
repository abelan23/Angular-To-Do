import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [
    {
      id: 0,
      name: "Cut grass",
    },
    {
      id: 1,
      name: "Go shopping"
    },
    {
      id: 2,
      name: "Make dinner"
    }
  ]
  getTasks = (): Observable<Task[]> => {
    return of(this.tasks);
  };
}
