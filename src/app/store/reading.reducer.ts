import { createReducer, on } from '@ngrx/store';
import { leerAhora } from './reading.actions';

export interface ReadingState {
  productos: any[];
}

export const initialState: ReadingState = {
  productos: []
};

export const readingReducer = createReducer(
  initialState,

  on(leerAhora, (state, { producto }) => {
    const existe = state.productos.some(
      item => item.id === producto.id
    );

    if (existe) {
      return state;
    }

    return {
      ...state,
      productos: [...state.productos, producto]
    };
  })
);