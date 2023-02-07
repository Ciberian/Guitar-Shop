import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const getSortType = (state: State): string => state[NameSpace.Sort].sortType;

