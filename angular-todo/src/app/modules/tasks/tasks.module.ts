import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from '../../tasks/tasks.component';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [TasksComponent, DisplayTasksComponent],
  exports: [TasksComponent, DisplayTasksComponent]

})
export class TasksModule { }
