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

} from '@angular/core';

@Component({
  selector: 'fa-lifecycles',
  template: `
    <p>
      lifecycles Works!
    </p>
  `,
  styles: []
})
export class LifecyclesComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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
