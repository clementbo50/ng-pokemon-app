import { BorderCardDirective } from './border-card.directive';
import { ElementRef } from '@angular/core';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = new ElementRef(document.createElement('div'));
    const directive = new BorderCardDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
