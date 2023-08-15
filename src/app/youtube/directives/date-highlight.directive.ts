import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDateHighlight]'
})
export class DateHighlightDirective implements OnInit {

  @Input() dateVideo!: string;

  @Input() isHighlightArrow?: boolean;


  private msInMonth = 2678400000;

  private msInSixMonth = 6 * this.msInMonth;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit(): void {
    this.defineColor();
  }

  defineColor() {
    const datePublished = new Date(this.dateVideo).getTime();
    const dateNow = Date.now();
    const msDifference = dateNow - datePublished;

    if (this.isHighlightArrow === true) {
      this.defineColorArrow(msDifference);
    } else {
      this.defineColorCard(msDifference);
    }
  }

  defineColorCard(ms: number) {
    if (ms >= this.msInSixMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'border_red');
    } else if (ms >= this.msInMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'border_green');
    } else {
      this.renderer2.addClass(this.el.nativeElement, 'border_blue');
    }
  }

  defineColorArrow(ms: number) {
    if (ms >= this.msInSixMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'link_back_red');
    } else if (ms >= this.msInMonth) {
      this.renderer2.addClass(this.el.nativeElement, 'link_back_green');
    } else {
      this.renderer2.addClass(this.el.nativeElement, 'link_back_blue');
    }
  }
}
