import { useSelector } from "react-redux";
import { I_list } from "../../redux/List/interfaces";
import { RootState } from "../../redux/store";

const ListItems = () => {
    const list: I_list[] = useSelector((state: RootState) => state.listReducer.list);
    const errMsg = useSelector((state: RootState) => state.listReducer.errMsg);
    const isLoading = useSelector((state: RootState) => state.listReducer.isLoading);
    // console.log("render", list);

    if (isLoading) return <div style={{ textAlign: "center" }}>loading...</div>;
    if (errMsg) return <div style={{ textAlign: "center" }}>{errMsg}</div>;

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {list &&
                list.length !== 0 &&
                list.map((item: any) => {
                    return (
                        <span key={item.value} style={{ padding: "5px" }}>
                            {item.text}
                        </span>
                    );
                })}
        </div>
    );
};

export default ListItems;
