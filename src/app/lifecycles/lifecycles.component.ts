import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input,

} from '@angular/core';

@Component({
  selector: 'fa-lifecycles',
  template: `
    <div>
      <div>
        <p>Content: </p>
        <ng-content></ng-content>
      </div>
      <div>
        <p>Property: </p>
        <div>{{text}}</div>
      </div>
    </div>
  `,
  styles: [`
    div {
      border: 2px solid green;
    }
  `]
})
export class LifecyclesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() text: string = ''

  constructor() { }

  ngOnInit() {
    console.log("onInit")
  }

  ngDoCheck() {
    console.log("doCheck")
  }

  ngOnChanges() {
    console.log("onChanges")
  }

  ngAfterContentInit() {
    console.log("afterContentInit")
  }

  ngAfterContentChecked() {
    console.log("afterContentChecked")
  }

  ngAfterViewInit() {
    console.log("afterViewInit")
  }

  ngAfterViewChecked() {
    console.log("afterViewChecked")
  }

  ngOnDestroy() {
    console.log("onDestroy")
  }
}
