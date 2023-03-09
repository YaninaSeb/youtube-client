import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDateHighlight]'
})
export class DateHighlightDirective implements OnInit {

  @Input() appDateHighlight = '';

  private msInMonth = 2678400000;

  private msInSixMonth = 6 * this.msInMonth;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.defineColor();
  }

  private defineColor() {
    const datePublished = new Date(this.appDateHighlight).getTime();
    const dateNow = Date.now();
    const diferentMilisec = dateNow - datePublished;
    
    if (diferentMilisec >= this.msInSixMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'border_red');
    } else if (diferentMilisec >= this.msInMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'border_green');
    } else {
      this.renderer2.addClass(this.el.nativeElement, 'border_blue');
    }
  }
}
