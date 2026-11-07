import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../shared/services/portfolio.service';
import { Project } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedProject: Project | null = null;

  constructor(public portfolio: PortfolioService) {}

  openModal(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
