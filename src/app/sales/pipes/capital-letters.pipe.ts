import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalLetters',
})
export class CapitalLettersPipe implements PipeTransform {
  transform(value: string, isCapital: boolean = true): string {
    const capitalLetters = value.toUpperCase();
    const lowercase = value.toLowerCase();

    return !isCapital ? lowercase : capitalLetters;
  }
}
