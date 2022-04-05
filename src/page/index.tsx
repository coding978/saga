import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItems from "../components/ListItems";
import { setList } from "../redux/List/actions";
import { I_list } from "../redux/List/interfaces";
import { setListReq } from "../redux/List/thunk";
import { RootState } from "../redux/store";

const ListPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setList({ page: 1 }));
        // dispatch(setList({ page: 1 }));
    }, []);

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                <button
                    onClick={() => {
                        dispatch(setList({ page: 1 }));
                        // dispatch(setListReq());
                    }}
                >
                    data1
                </button>
                <button
                    onClick={() => {
                        dispatch(setList({ page: 2 }));
                        // dispatch(setListReq());
                    }}
                >
                    data2
                </button>
            </div>
            <ListItems />
        </div>
    );
};

export default ListPage;
