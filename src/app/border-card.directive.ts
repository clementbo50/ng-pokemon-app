import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el:ElementRef ) { 
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  /* Evenements pour le hover sur les cartes */
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#4286f4');

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  /*methode pour changer la hauteur de la carte et lui appliquer une bordure*/
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
