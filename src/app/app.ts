import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, CardComponent, InputDirective } from '@ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonComponent, CardComponent, InputDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-v21-test');
}
