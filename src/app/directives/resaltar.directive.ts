import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective implements OnInit {
  constructor(private elRef: ElementRef, private rendered: Renderer2) { }
  @Input('appResaltar') plan: string = '';

  ngOnInit() {
      if(this.plan === 'pagado') {
          this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
          this.rendered.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
      }
  }
}
