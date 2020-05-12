import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    path: 'contacts',
    loadChildren: () => import('./modules/contact/contact.module').then(c => c.ContactModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
