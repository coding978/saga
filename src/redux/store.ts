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

// export const store = configureStore({
//     reducer: {
//         listReducer,
//     },
// });

export type RootState = ReturnType<typeof store.getState>;
