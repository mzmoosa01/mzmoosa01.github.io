import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperianceComponent } from './pages/experiance/experiance.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'experience', component: ExperianceComponent
  },
  {
    path: 'skills', component: SkillsComponent
  },
  {
    path: 'education', component: EducationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
