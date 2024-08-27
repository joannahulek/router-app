import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'router-app';

  goToContact(){
    this.router.navigate(['contact'])
  }
}
