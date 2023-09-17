import axiosClient from "./axiosClient";

const crawlApi = {
  getData: (params) => {
    const url = "/sign-in";
    return axiosClient.post("/invoice/list-all");
  },
  
  //   logOut: (params) => {
  //     const url = '/log-out'
  //     return axiosClient.post(url, params)
  //   },
  //   signUp: (params) => {
  //     const url = '/sign-up'
  //     return axiosClient.post(url, params)
  //   },
};

export default crawlApi;
