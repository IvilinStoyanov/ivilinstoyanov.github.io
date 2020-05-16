import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills.component';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule
  ],
  declarations: [SkillsComponent]
})
export class SkillsModule { }
