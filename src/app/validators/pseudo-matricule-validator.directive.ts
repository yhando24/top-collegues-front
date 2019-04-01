import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPseudoMatriculeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PseudoMatriculeValidatorDirective, multi: true }]
})
export class PseudoMatriculeValidatorDirective implements Validator {


  validate(control: AbstractControl): ValidationErrors | null {

    console.log(control.value.matricule + " et " + control.value.nom );
    if (control.value.matricule != control.value.nom || control.value.nom == null || control.value.matricule == null){
      console.log('ok !');
      return null;

    }else {
      console.log('PAS ok !');
      return {
        "errorIdentique": "Le pseudo et le matricule ne peuvent pas etre identiques"};
      };
    }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

}
