import { NameSpace } from '../../constants';
import { State } from '../../types/state.types';

export const getCity = (state: State): string => state[NameSpace.City].city;
