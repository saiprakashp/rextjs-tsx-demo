import { Reducer } from "redux";
import { FilterDataStore, FilterDataStoreAction } from "../types";

export const UserReducer: Reducer<FilterDataStore, FilterDataStoreAction> = (
    state: any,
    action
) => {
    switch (action.type) {
        case "GET_FILTERS":
               return { ... action.payload.data  };
        default:
            return state;
    }
};
