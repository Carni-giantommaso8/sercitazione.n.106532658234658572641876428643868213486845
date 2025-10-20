import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { containerr } from './container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, containerr],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular');
}
