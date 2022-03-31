import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateHighlight]'
})
export class DateHighlightDirective implements OnInit {

  @Input() appDateHighlight = '';

  private milisecInWeek: number = 7 * 24 * 60 * 60 * 1000;
  private milisecInMonth: number = 30 * 24 * 60 * 60 * 1000;
  private milisecInSixMonth: number = 6* 30 * 24 * 60 * 60 * 1000;


  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.defineColor();
  }

  private defineColor() {
    const datePublished = new Date(this.appDateHighlight).getTime();
    const dateNow = Date.now();
    const diferentMilisec = dateNow - datePublished;
    
    if (diferentMilisec > this.milisecInSixMonth) {
      this.renderer2.setStyle(this.el.nativeElement, 'border-bottom', '5px solid #EB5757')
    } else if (diferentMilisec < this.milisecInMonth && diferentMilisec >= this.milisecInWeek) {
      this.renderer2.setStyle(this.el.nativeElement, 'border-bottom', '5px solid #27AE60')
    } else if ( diferentMilisec < this.milisecInWeek) {
      this.renderer2.setStyle(this.el.nativeElement, 'border-bottom', '5px solid #2F80ED')
    }

  }

}
