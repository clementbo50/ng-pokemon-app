import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  constructor(private el:ElementRef ) { 

    this.setBorder('#f5f5f5');
  }

  @Input('pkmnBorderCard') borderColor!: string;

  /* Evenements pour le hover sur les cartes */
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#4286f4');

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
