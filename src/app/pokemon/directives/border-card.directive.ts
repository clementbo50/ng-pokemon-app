import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = 'grey';
  private defaultColor: string = '#4286f4';
  private defaultHeight: number = 180;

  constructor(private el:ElementRef ) { 

    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor!: string; //alias de la directive


  /* Evenements pour le hover sur les cartes */
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  /*methode pour changer la hauteur de la carte et lui appliquer une bordure*/
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
