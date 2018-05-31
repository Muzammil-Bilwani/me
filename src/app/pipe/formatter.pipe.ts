import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return value.toString().replace(/,/g, ' , ');
  }

}
