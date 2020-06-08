import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './components/resume.component';
import { ResumeRoutingModule } from './resume-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResumeRoutingModule
  ],
  declarations: [ResumeComponent]
})
export class ResumeModule { }
