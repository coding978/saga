import * as actionTypes from "./actionTypes";
import { I_ListReducer } from "./interfaces";

const initialState: I_ListReducer = {
    list: [],
    errMsg: "",
    isLoading: false,
};

const listReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_LIST:
            return { ...state, isLoading: true, errMsg: "" };
        case actionTypes.SET_LIST_SUCCESS:
            return { ...state, list: action.payload, isLoading: false };
        case actionTypes.SET_LIST_FAIL:
            return { ...state, errMsg: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default listReducer;
