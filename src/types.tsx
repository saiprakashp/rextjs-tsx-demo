import { ThunkDispatch, ThunkAction } from "redux-thunk";



interface Field {
  title: string;
  inputType: string;
  labelText: string;
  chipText: string;
  keyText: string;
  optionValues: string[];
  checked: boolean;
}


export interface Datafields {
  title: string;
  key: string;
  fields: Field[];
}

interface Dataprops {
  data: Datafields[];
}
export interface FilterDataStore {
  data: Datafields[];
}

export interface FilterDataStoreAction {
  type: string;
  payload: any;
}


export type DataStoreDispatch = ThunkDispatch<FilterDataStore, {}, FilterDataStoreAction>;

export type DataStoreActionCreator<T = void> = ThunkAction<T, FilterDataStore, {}, FilterDataStoreAction>;
 