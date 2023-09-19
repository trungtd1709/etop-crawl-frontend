// api/axiosClient.js
import axios from "axios";

import queryString from "query-string";
import ToastHelper from "../general/ToastHelper";

const sTag = "[AxiosClient]";

// Cai dat config mac dinh cho http request
// Tham khao: `https://github.com/axios/axios#request-config`
// de xem chi tiet
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // LogHelper.log(`${sTag} - ${config.baseURL}${config.url}, ${config.method}, ${config.method === 'post' ? JSON.stringify(config.data) : JSON.stringify(config.params)}`);
  //   LogHelper.log(`${sTag} - headers: ${JSON.stringify(config.headers.common)}`)
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    debugger

    return response;
  },
  async (error) => {
    // LogHelper.log(`${sTag} - ${error}`)

    const { status, data } = error.response || {};

    if (status === 401) {
      window.location.href = "/dang-nhap";
    }

    if (error.request?.responseType == "blob") {
      let errorMessage = JSON.parse(await error.response.data.text());
      if (Array.isArray(errorMessage?.message)) {
        errorMessage?.message?.forEach(ToastHelper.showError);
      } else {
        ToastHelper.showError(errorMessage?.message);
      }
    } else {
      if (Array.isArray(data?.message)) {
        data?.message?.forEach(ToastHelper.showError);
      } else {
        ToastHelper.showError(data?.message);
      }
    }

    throw error;
  }
);

export default axiosClient;
