import { NameSpace } from '../../constants';
import { State } from '../../types/state.types';

export const getCatalogSortType = (state: State): string => state[NameSpace.Sort].catalogSortType;
export const getItemsListSortType = (state: State): string => state[NameSpace.Sort].itemsListSortType;
export const getOrdersSortType = (state: State): string => state[NameSpace.Sort].ordersSortType;
