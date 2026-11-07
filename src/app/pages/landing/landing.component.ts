import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { InteractiveAvatarComponent } from '../../components/interactive-avatar/interactive-avatar.component';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, InteractiveAvatarComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  currentRoleIndex = 0;
  displayedRole = 'Full Stack Developer';
  isDeleting = false;
  private typingTimer: any;

  readonly roles = [
    'Full Stack Developer',
    'Java Developer',
    'Angular Developer',
    'Software Developer'
  ];

  constructor(
    public portfolio: PortfolioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.typeNextCharacter();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  private typeNextCharacter(): void {
    const fullText = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.displayedRole = fullText.substring(0, this.displayedRole.length - 1);
    } else {
      this.displayedRole = fullText.substring(0, this.displayedRole.length + 1);
    }

    let delta = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.displayedRole === fullText) {
      delta = 2200;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedRole === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      delta = 350;
    }

    this.typingTimer = setTimeout(() => this.typeNextCharacter(), delta);
  }

  navigateToPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }
}
