import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReadingState } from './reading.reducer';

export const selectReadingState =
  createFeatureSelector<ReadingState>('reading');

export const selectProductos =
  createSelector(
    selectReadingState,
    state => state.productos
  );