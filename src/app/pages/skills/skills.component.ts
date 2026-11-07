import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../shared/services/portfolio.service';
import { SkillCategory } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  selectedCategory: string = 'all';

  constructor(public portfolio: PortfolioService) {}

  selectCategory(catId: string): void {
    this.selectedCategory = catId;
  }

  get filteredCategories(): SkillCategory[] {
    if (this.selectedCategory === 'all') {
      return this.portfolio.skillCategories;
    }
    return this.portfolio.skillCategories.filter(c => c.id === this.selectedCategory);
  }
}
