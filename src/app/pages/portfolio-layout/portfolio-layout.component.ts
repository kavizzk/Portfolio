import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-portfolio-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio-layout.component.html',
  styleUrls: ['./portfolio-layout.component.scss']
})
export class PortfolioLayoutComponent {
  isMobileMenuOpen = false;
  isScrolled = false;
  showScrollTop = false;

  readonly navItems = [
    { label: 'About', path: '/portfolio/about' },
    { label: 'Skills', path: '/portfolio/skills' },
    { label: 'Projects', path: '/portfolio/projects' },
    { label: 'Experience', path: '/portfolio/experience' },
    { label: 'Education', path: '/portfolio/education' },
    { label: 'Achievements', path: '/portfolio/achievements' },
    { label: 'Contact', path: '/portfolio/contact' }
  ];

  constructor(
    public portfolio: PortfolioService,
    private router: Router
  ) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 40;
    this.showScrollTop = scrollY > 350;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
