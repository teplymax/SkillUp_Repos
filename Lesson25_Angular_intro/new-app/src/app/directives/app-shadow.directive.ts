import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppShadow]',
})
export class AppShadowDirective {
  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'box-shadow', '2px 2px 12px #58A362');
  }
}
