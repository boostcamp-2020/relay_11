import axios from 'axios';
const URL = "http://0.0.0.0:80";


const instance = axios.create({
    baseURL: 'base',
    //withCredentials: true, cors 오류시.
  });

  export const getData = (restUrl = '') => {
    return instance.get(restUrl);
  };
  
  export const postData = (restUrl = '', data = {}) => {
    return instance.post(restUrl, data);
  };
  
  export const putData = (restUrl = '', data = {}) => {
    return instance.put(restUrl, data);
  };
  
  export const deleteData = (restUrl = '', data = {}) => {
    return instance.delete(restUrl, data);
  };

  export const signUpApi = (params) => {
    return axios
      .post(`${URL}/signup`, params)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  };