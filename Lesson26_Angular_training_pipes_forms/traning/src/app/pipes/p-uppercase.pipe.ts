import { Pipe, PipeTransform } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Pipe({
  name: 'pUppercase'
})
export class PUppercasePipe implements PipeTransform {

  transform(row: string) {
    let counter = 0, newRow = '';
    for (let symbol of row) {
      if (symbol === 'p') counter += 1;
      if (symbol === 'p' && counter % 2 == 0) { newRow += symbol.toUpperCase(); }
      else newRow += symbol;
    }
    return newRow;
  }


}
