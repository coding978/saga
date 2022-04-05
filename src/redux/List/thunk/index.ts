import * as actions from "../actions";

import { fetchList } from "../saga/api";

export function setListReq() {
    return function (dispatch: any) {
        return fetchList({ page: 1 }).then((data: any) => {
            dispatch(actions.setListSuccess(data.data.list));
        });
    };
}
