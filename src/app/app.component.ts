import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'init-async';

  constructor(private readonly router: Router) { }

  async onClickAsync() {
    await this.router.navigate(['/async']);
  }

  async onClickSync() {
    await this.router.navigate(['/sync'])
  }
}
