import * as actionTypes from "./actionTypes";
import { I_ListReducer } from "./interfaces";

const initialState: I_ListReducer = {
    list: [],
    errMsg: "",
    isLoading: false,
    entu: {
        idaLoading: false,
    },
};
// https://chentsulin.github.io/redux/docs/basics/Reducers.html#designing-the-state-shape
// reducer  should be pure function

// basic structure
// https://redux.js.org/usage/structuring-reducers/basic-reducer-structure
// {
//     domainData1 : {},
//     domainData2 : {},
//     appState1 : {},
//     appState2 : {},
//     ui : {
//         uiState1 : {},
//         uiState2 : {},
//     }
// }

// https://stackoverflow.com/questions/60290678/redux-domain-data-and-app-state-vs-ui-state
// https://segmentfault.com/a/1190000009540007?sort=newest
// domain state
// app state
// ui state

//stackoverflow.com/questions/33940015/how-to-choose-the-redux-state-shape-for-an-app-with-list-detail-views-and-pagina

https: const listReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_LIST:
            return {
                ...state,
                isLoading: true,
                errMsg: "",
                entu: {
                    ...state.entu,
                    idaLoading: true,
                },
            };
        case actionTypes.SET_LIST_SUCCESS:
            return { ...state, list: action.payload, isLoading: false };
        case actionTypes.SET_LIST_FAIL:
            return { ...state, errMsg: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default listReducer;

// https://stackoverflow.com/questions/32135779/updating-nested-data-in-redux-store

// state of shape
// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape

// {
//     simpleDomainData1: {....},
//     simpleDomainData2: {....},
//     entities : {
//         entityType1 : {....},
//         entityType2 : {....}
//     },
//     ui : {
//         uiSection1 : {....},
//         uiSection2 : {....}
//     }
// }
