import { Component } from '@angular/core';

@Component({
  selector: 'fa-two-way-binding',
  template: `
    <div>
      <input type="text" [(ngModel)]="person.name" />
      <span>{{person.name}}</span>
    </div>
    <div>
    <input type="number" [(ngModel)]="person.age" />
    <span>{{person.age}}</span>
  </div>
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'alex',
    age: 22,
  }
}
