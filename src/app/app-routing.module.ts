import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(p => p.ProjectsModule)
  },
  {
    path: 'projects/details/:id',
    loadChildren: () => import('./modules/project-details/project-details.module').then(pd => pd.ProjectDetailsModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./modules/skills/skills.module').then(s => s.SkillsModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./modules/resume/resume.module').then(r => r.ResumeModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contact/contact.module').then(c => c.ContactModule)
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
