import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import listReducer from "./List/reducer";
import listSaga from "./List/saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        listReducer,
    },
    middleware: [sagaMiddleware],
});
function* rootSaga() {
    yield all([...listSaga]);
}
sagaMiddleware.run(rootSaga);

const saveState = (state: RootState) => {
    console.log("statess", state);
    localStorage.setItem("ddd", "GGG");
};

// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// https://stackoverflow.com/questions/69333353/run-a-side-effect-after-slice-redux-state-update-completed

store.subscribe(() => {
    saveState(store.getState());
});

// export const store = configureStore({
//     reducer: {
//         listReducer,
//     },
// });

export type RootState = ReturnType<typeof store.getState>;
