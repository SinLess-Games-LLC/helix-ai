import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component'

@Component({
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  selector: 'helix-ai-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Helix Ai'
}
