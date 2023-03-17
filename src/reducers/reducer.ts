import { Reducer } from "redux";
import { FilterDataStore, FilterDataStoreAction } from "../types";

export const UserReducer: Reducer<FilterDataStore, FilterDataStoreAction> = (
    state = { data: [] },
    action
) => {
    switch (action.type) {
        case "GET_FILTERS":
            state.data = action.payload;
            return { ...state  };
        default:
            return state;
    }
};
