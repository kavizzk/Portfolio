import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interactive-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-avatar.component.html',
  styleUrls: ['./interactive-avatar.component.scss']
})
export class InteractiveAvatarComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';
  @Input() showGlow: boolean = true;
  @Input() showBadges: boolean = false;

  readonly avatarSrc = '/assets/avatar/ghibli-avatar.png';
}
