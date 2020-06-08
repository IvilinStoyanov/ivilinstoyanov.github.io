import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { ProjectDetailsComponent } from './components/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule
  ],
  declarations: [ProjectDetailsComponent]
})
export class ProjectDetailsModule { }
