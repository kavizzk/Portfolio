import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PortfolioLayoutComponent } from './pages/portfolio-layout/portfolio-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Kavitha S | Full Stack Developer'
  },
  {
    path: 'portfolio',
    component: PortfolioLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'About Me | Kavitha S'
      },
      {
        path: 'skills',
        component: SkillsComponent,
        title: 'Technical Toolkit | Kavitha S'
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Featured Projects | Kavitha S'
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Professional Journey | Kavitha S'
      },
      {
        path: 'education',
        component: EducationComponent,
        title: 'Education | Kavitha S'
      },
      {
        path: 'achievements',
        component: AchievementsComponent,
        title: 'Milestones & Recognition | Kavitha S'
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact & Connect | Kavitha S'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
