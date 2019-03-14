import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//lines 5-10 need to addressed at a later time regarding the newTaskFormComponent//
const routes: Routes = [
	{
		path: 'newTask',
		component: newTaskFormComponent
  },
  {
    path: 'taskDisplay',
    component: DisplayTasksComponent
  }
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
