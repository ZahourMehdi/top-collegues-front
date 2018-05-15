import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../model';

@Pipe({
  name: 'filtrer'
})
export class FiltrerPipe implements PipeTransform {

  transform(value: Collegue[], args: string): Collegue[] {
    if (value == null || value == [] || args == null){
      return value;
    }
    return value.filter((collegue:Collegue) =>
      collegue.pseudo.includes(args)
    );
  }

}
