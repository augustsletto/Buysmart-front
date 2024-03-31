import axios from "axios";

axios.defaults.baseURL = "https://buysmart-frontend-7289ed9987fe.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();