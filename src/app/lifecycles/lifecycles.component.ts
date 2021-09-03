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
  ViewChild,
  ContentChild,
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
      <div>
        <p #boundParagraph>
          Reference paragraph
        </p>
        <i>{{boundParagraph.textContent}}</i>
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

  @ViewChild('boundParagraph') boundParagraph: HTMLElement;
  @ContentChild('boundContent') boundContent: HTMLElement;

  constructor() { }

  ngOnInit() {
    console.log("onInit")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngDoCheck() {
    console.log("doCheck")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngOnChanges(changes) {
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngAfterContentInit() {
    console.log("afterContentInit")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngAfterContentChecked() {
    console.log("afterContentChecked")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngAfterViewInit() {
    console.log("afterViewInit")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngAfterViewChecked() {
    console.log("afterViewChecked")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }

  ngOnDestroy() {
    console.log("onDestroy")
    // console.log('p', this.boundParagraph)
    // console.log('p', this.boundContent)
  }
}
