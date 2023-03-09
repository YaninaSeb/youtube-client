import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDateHighlight]'
})
export class DateHighlightDirective implements OnInit {

  @Input() appDateHighlight = '';

  private milisecInWeek = 604800000;

  private milisecInMonth = 2678400000;

  private milisecInSixMonth = 6 * this.milisecInMonth;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.defineColor();
  }

  private defineColor() {
    const datePublished = new Date(this.appDateHighlight).getTime();
    const dateNow = Date.now();
    const diferentMilisec = dateNow - datePublished;
    console.log(diferentMilisec)
    
    if (diferentMilisec >= this.milisecInSixMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'border_red');
    } else if (diferentMilisec >= this.milisecInMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'border_green');
    } else {
      this.renderer2.addClass(this.el.nativeElement, 'border_blue');
    }
  }
}
