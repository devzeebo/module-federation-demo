import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-exposed-component',
  template: '<div>Some ng component with {{someInput}}. Count: {{count}} <button (click)="onClick()">Up</button></div>',
})
export class MfExposedComponent {
  @Input({ required: true })
  someInput!: string;

  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener('increment', (e: CustomEvent) => console.log('from angular', e));
  }

  count = 0;
  onClick() {
    this.count++;

    this.element.nativeElement.dispatchEvent(new CustomEvent('increment', {
      detail: this.count
    }));
  }
}
