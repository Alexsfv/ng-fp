import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  bindingString = "This is binding string"
  bindingNumber = 555

  onClass() {
    return true
  }

  onClick(payload: string) {
    console.log('Clicked with data:', payload)
  }
}
