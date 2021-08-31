import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="handleClick()">
      Click me for Event!
    </button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>()

  handleClick() {
    console.log('Clicked, begin emit')
    this.clicked.emit("Some data-1")
  }
}
