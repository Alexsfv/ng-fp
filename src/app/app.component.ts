import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Edited my first Angular app :)';
  showCycleComponent = true
  cycleContent = Math.random()
  cycleProp = Math.random()

  updateCycleContent = () => {
    this.cycleContent = Math.random()
  }

  updateCycleProp = () => {
    this.cycleProp = Math.random()
  }
}
