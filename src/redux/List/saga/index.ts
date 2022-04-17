import { eventChannel, END } from "redux-saga/";
import { call, delay, put, StrictEffect, takeLatest, takeEvery, throttle, debounce } from "redux-saga/effects";
import * as api from "./api";
import * as actionTypes from "../actionTypes";
import * as actions from "../actions";
import { I_SetList } from "../interfaces";

function* setListAsync(action: I_SetList): Generator<StrictEffect, any, any> {
    try {
        // call 後面的第一個參數可以是會回傳 Promise 的方法, 第二個傳入自設參數
        const listRes = yield call(api.fetchList, action.payload);
        // { data, status, statusText }

        // 可控制延遲
        // yield delay(3000);

        // side effect should not in reducer
        // https://stackoverflow.com/questions/32982237/where-should-i-put-synchronous-side-effects-linked-to-actions-in-redux
        // 'https://stackoverflow.com/questions/36016336/why-does-a-redux-reducer-have-to-be-side-effect-free'
        // 'https://redux.js.org/understanding/history-and-design/prior-art'
        localStorage.setItem("name", "ss");
        // put 來產生 dispatch 這個effect 更新store的資料
        yield put(actions.setListSuccess(listRes.data.list));
    } catch (err: any) {
        // console.log("err", err.response);
        // { data: err.response.data, status: err.response.status, statusText: err.response.statusText };
        yield put(actions.setListFail(err.response.statusText));
    }
}

function* watchSetListItemsAsync() {
    // yield takeLatest(actionTypes.SET_LIST, setListAsync);
    yield debounce(300, actionTypes.SET_LIST, setListAsync);
    // yield throttle(2000, actionTypes.SET_LIST, setListAsync);
    // yield takeEvery(actionTypes.SET_LIST, setListAsync);
}

export default [watchSetListItemsAsync()];
