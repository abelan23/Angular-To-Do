import { Component, OnInit, Input, Output } from '@angular/core';
import { Task } from '../../../../models/task';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
 @Input() task: Task;
 @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
  }

  onClickUpdate() {
    this.taskUpdated.emit(this.task.id);
  }
}