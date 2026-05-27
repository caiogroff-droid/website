import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit {
  @Input() delay: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.transitionDelay = `${this.delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(this.el.nativeElement);
  }
}
