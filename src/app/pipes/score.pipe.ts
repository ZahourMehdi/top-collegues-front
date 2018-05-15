import { Pipe, PipeTransform } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let style: string

    if (value > 0) {
      style = `<span class="text-success h3"> + ${value}</span>`
    } else if (value < 0 ){
      style = `<span class="text-danger h3 ">  ${value}</span>`
    } else if (value ==0){
      style = `<span class="text-primary h3 "> ${value}</span>`
    }
    return style
  }
}
