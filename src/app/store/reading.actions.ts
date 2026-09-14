import { createAction, props } from '@ngrx/store';

export const leerAhora = createAction(
  '[Favoritos] Leer ahora',
  props<{ producto: any }>()
);