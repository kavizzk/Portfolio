import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(public portfolio: PortfolioService) {}
}
