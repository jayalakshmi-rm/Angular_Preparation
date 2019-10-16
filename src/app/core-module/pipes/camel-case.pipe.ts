import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelcase'
})
/**
 * value = hi this is chandrika
 * output Hi This Is Chandrika
 * Usage ::::
 * In HTML {{value | camelcase : 2}}
 * In Component this.camelCase.transform(value, 2);
 */
export class CamelCasePipe implements PipeTransform {

  transform(value: string, count: number): any {
    if (value) {
      const arrayOfWord = value.split(' ');
      let lowerCaseVal;
      let finalVal = '';
      arrayOfWord.forEach((item, index) => {
        if (index < count) {
          lowerCaseVal = item.toLowerCase();
          finalVal += lowerCaseVal[0].toUpperCase() + lowerCaseVal.slice(1);
          if (index + 1 !== count && arrayOfWord.length !== index + 1) {
            finalVal += ' ';
          }
        }
      });
      return finalVal;
    } else {
      return value;
    }
  }

}
