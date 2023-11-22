import { Component } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'helix-ai-navbar',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title: string = 'Helix Ai'
}
