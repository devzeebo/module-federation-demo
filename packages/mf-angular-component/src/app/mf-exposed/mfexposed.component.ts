import { Component, ElementRef, Input, NgZone, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-exposed-component',
  template: '<div>Some ng component with {{someInput}} and {{specialProp?.magical}}. Count: {{count}} <button (click)="onClick()">Up</button></div>',
})
export class MfExposedComponent {
  @Input({ required: true })
  someInput!: string;

  @Input()
  specialProp?: { magical: string };

  constructor(private element: ElementRef, zone: NgZone) {
    // const webComponent = this.element.nativeElement;

    // if (webComponent.specialProp) {
    //   this.specialProp = webComponent.specialProp;
    // }

    // Object.defineProperty(webComponent, 'specialProp', {
    //   get: () => this.specialProp,
    //   set: (value) => zone.run(() => this.specialProp = value)
    // });
  }

  count = 0;
  onClick() {
    this.count++;

    this.element.nativeElement.dispatchEvent(new CustomEvent('increment', {
      detail: this.count
    }));
  }
}
