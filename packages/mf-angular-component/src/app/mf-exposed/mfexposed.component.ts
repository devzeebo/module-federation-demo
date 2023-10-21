import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-exposed-component',
  template: '<div>Some ng component.</div>',
})
export class MfExposedComponent {
}
