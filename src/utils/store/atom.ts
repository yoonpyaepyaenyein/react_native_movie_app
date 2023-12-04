import {atom} from 'jotai';
import {PopularMovieResult} from '../../types/popularMovieDataType';
import {atomWithMMKVStorage} from './atomWithMMKVStorae';

export const favoriteMovieListAtom = atomWithMMKVStorage(
  '@favoriteMovie',
  <PopularMovieResult[]>[],
);

//normal atoms
export const isLoadingAtom = atom(true);
export const netAtom = atom(true);
