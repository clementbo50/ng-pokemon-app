import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(value: string): string {
    let color: string;
    
    switch (value.toLowerCase()) {
      case 'grass':
        color = 'green';
        break;
      case 'fire':
        color = 'red';
        break;
      case 'water':
        color = 'blue';
        break;
      case 'bug':
        color = 'green';
        break;
      case 'normal':
        color = 'gray';
        break;
      case 'poison':
        color = 'purple';
        break;
      case 'electric':
        color = 'yellow';
        break;
      case 'ground':
        color = 'brown';
        break;
      case 'fairy':
        color = 'pink';
        break;
      case 'fighting':
        color = 'orange';
        break;
      case 'psychic':
        color = 'deeppink';
        break;
      case 'rock':
        color = 'darkkhaki';
        break;
      case 'ghost':
        color = 'indigo';
        break;
      case 'ice':
        color = 'cyan';
        break;
      case 'dragon':
        color = 'darkblue';
        break;
      case 'dark':
        color = 'black';
        break;
      case 'steel':
        color = 'lightgray';
        break;
      case 'flying':
        color = 'cyan';
        break;
      default:
        color = 'teal'; // Default color for unknown types
        break;
    }
    
    return 'chip ' + color;
  }

}
