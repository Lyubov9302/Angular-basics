import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTitle } from './components/show-title/show-title';

export interface Role {
  role: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule, ShowTitle],
})
export class App {
  title: string = 'Angular basic';
  isComponentVisible: boolean = true;

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
