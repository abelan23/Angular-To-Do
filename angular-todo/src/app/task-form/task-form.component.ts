import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private http: Http() {
    taskObj:object = {};

  addNewTask = function(task) {
    this.taskObj = {
      "name": task.name
    }

    this.hhtp.post("http://localhost:3000/tasks", this.taskObj).subscribe((res:Response) => {
      console.log(res);
    })
  }

  ngOnInit() {
  }

}
