import axios from "axios";

axios.defaults.baseURL = "https://8000-augustslett-beehiveback-p02o8jf3j0i.ws-eu110.gitpod.io/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();