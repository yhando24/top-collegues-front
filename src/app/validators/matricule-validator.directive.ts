import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of as observableOf} from 'rxjs';
import { DataService } from '../service/data.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appMatriculeValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: MatriculeValidatorDirective, multi: true}]
})
export class MatriculeValidatorDirective implements AsyncValidator {

  validate(control: AbstractControl): null |Observable <ValidationErrors>  {



    console.log('ICI :::' + control.value);
    let validerror : ValidationErrors = { error: 'Ce matricule est deja attribué a un collegue'};
    let re;
    console.log(control);
   return this._srv.checkMatricule(control.value).pipe(
     map(value => value ? validerror : null)
   );

   /*
   .subscribe(
      (data: boolean) => {
        console.log(data)
        if(data == true){
        re = Observable.create(observer => {
            setTimeout(() => observer.next(validerror), 1000)
            setTimeout(() => observer.complete(), 2000)
          })

        }else{
          re = null;
        }


        },

      error => {
      },
      );

      return re.subscribe(
        value => console.log('ok'),
        error => console.log('error'),
        () => console.log('terminé'));
*/

  }
  registerOnValidatorChange?(fn: () => void): void {

  }

  constructor(private _srv: DataService) { }

}
