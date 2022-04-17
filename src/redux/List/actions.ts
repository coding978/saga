import * as actionTypes from "./actionTypes";
import { I_list, I_Req } from "./interfaces";

export const setList = (payload: I_Req) => ({
    type: actionTypes.SET_LIST,
    payload,
});

export const setListSuccess = (payload: I_list[]) => ({
    type: actionTypes.SET_LIST_SUCCESS,
    payload,
});

export const setListFail = (payload: any) => ({
    type: actionTypes.SET_LIST_FAIL,
    payload,
});

export const setCancel = () => ({
    type: actionTypes.SET_CANCEL,
});
