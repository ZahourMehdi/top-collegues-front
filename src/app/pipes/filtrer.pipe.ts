import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../model';

@Pipe({
  name: 'filtrer'
})
export class FiltrerPipe implements PipeTransform {

  transform(value: Collegue[], args?: any): Collegue[] {
    if (value == null || value == [] || args[0] == null){
      return value;
    }
    return value.filter((collegue:Collegue) =>
      collegue.pseudo.includes(args[0])
    );
  }

}
