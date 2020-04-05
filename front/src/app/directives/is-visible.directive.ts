import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[isVisible]'
})
export class IsVisibleDirective implements OnChanges {

  @Input() isVisible;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isVisible) {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }

}
