import axios from "axios";
import { I_Req, I_Res } from "../interfaces";

type I_fetchList = (req: I_Req) => Promise<I_Res | void>;

export const fetchList: I_fetchList = (req) => {
    if (req.page === 2) return axios.get("./fakeList2.json");
    return axios.get("./fakeList.json");
};
