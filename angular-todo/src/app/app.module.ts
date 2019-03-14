import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TasksModule } from './modules/tasks/tasks.module';

import { AppComponent } from './app.component';

import { TasksService } from './services/tasks.service';
import { AppRoutingModule } from './/app-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  declarations: [AppComponent, TaskFormComponent],
  imports: [BrowserModule, TasksModule, AppRoutingModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
