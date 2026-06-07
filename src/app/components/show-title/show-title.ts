import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-title',
  imports: [FormsModule],
  templateUrl: './show-title.html',
  styleUrl: './show-title.scss',
})
export class ShowTitle implements OnInit, OnDestroy {
  @Input() incomingTitle!: string;

  @Output('output') outputTitle: EventEmitter<string> = new EventEmitter<string>();

  changedTitle!: string;

  constructor() {
    console.log('constructor', this.incomingTitle);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.incomingTitle);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  sendTitle() {
    this.outputTitle.emit(this.changedTitle);
  }
}
