import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Heroe[], colum: string = 'sin valor'): Heroe[] {
    switch (colum) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;

      case 'fly':
        return heroes.sort((a, b) => (a.fly > b.fly ? -1 : 1));
        break;

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
        break;

      default:
        return heroes;
        break;
    }
  }
}
