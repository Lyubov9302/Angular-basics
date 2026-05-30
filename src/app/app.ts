import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Role {
  role: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule],
})
export class App {
  title: string = 'Angular basic';
  isParagraphVisible: boolean = true;
  list: string[] = ['List one', 'List two'];
  roles: Role[] = [
    {
      role: 'admin',
      text: 'admin',
    },
    {
      role: 'user',
      text: 'user',
    },
    {
      role: 'customer',
      text: 'Ivan',
    },
    {
      role: 'user',
      text: 'user2',
    },
  ];

  show() {
    console.log('isParagraphVisible', this.isParagraphVisible);
  }

  getColor(user: Role): string {
    return user.role === 'admin' ? 'green' : user.role === 'user' ? 'red' : 'blue';
  }

  getDate() {
    return new Date();
  }
}
