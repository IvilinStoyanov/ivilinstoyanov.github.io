import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/projects/gallery.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: GalleryComponent
  },
  {
    path: 'projects/details/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
