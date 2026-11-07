import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../shared/services/portfolio.service';
import { Achievement } from '../../shared/models/portfolio.models';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  activeTab: string = 'all';

  constructor(public portfolio: PortfolioService) {}

  filterCategory(cat: string): void {
    this.activeTab = cat;
  }

  get filteredAchievements(): Achievement[] {
    if (this.activeTab === 'all') {
      return this.portfolio.achievements;
    }
    return this.portfolio.achievements.filter(a => a.category.toLowerCase().includes(this.activeTab.toLowerCase()));
  }
}
