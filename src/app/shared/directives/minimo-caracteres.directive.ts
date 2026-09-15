import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator
} from '@angular/forms';
import type { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appMinimoCaracteres]',
  standalone: false,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinimoCaracteresDirective,
      multi: true
    }
  ]
})
export class MinimoCaracteresDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const valor = control.value || '';

    if (valor.length > 0 && valor.length < 3) {
      return {
        minimoCaracteres: true
      };
    }

    return null;
  }
}
