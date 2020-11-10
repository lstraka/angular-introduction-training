import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenNumbers'
})
export class EvenNumbersPipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): number[] {
    if (value) {
      value = value.filter(even => even % 2 === 0);
    }
    return value;
  }

}
