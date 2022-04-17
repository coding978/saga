import * as actionTypes from "./actionTypes";

export interface I_list {
    text: string;
    value: string;
}

export interface I_ListReducer {
    list: I_list[];
    errMsg: string;
    isLoading: boolean;
    entu: {};
}

export interface I_Req {
    page: number;
}

export interface I_Res {
    status: number;
    statusText: string;
    data: I_list[];
}

export interface I_SetList {
    type: typeof actionTypes.SET_LIST;
    payload: I_Req;
}
