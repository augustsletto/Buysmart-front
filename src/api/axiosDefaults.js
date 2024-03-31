import axios from "axios";

axios.defaults.baseURL = "https://buysmart-react-a67a60d44e70.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();