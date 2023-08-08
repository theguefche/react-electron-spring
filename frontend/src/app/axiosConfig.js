import axios from "axios";

const localHost = "http://127.0.0.1:8080"

const Api = axios.create({
    baseURL: localHost,
});

export default Api;
