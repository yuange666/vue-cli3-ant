/**
 * Created by lizhiyuan on 2019/11/4.
 */
import axios from "axios";
const qs = require('qs');
import { message } from 'ant-design-vue';
// 响应拦截器
axios.interceptors.response.use(
    (res) => {
        return Promise.resolve(res);
    },
    error => {
        if(error.response &&error.response.status===401){

        }else {
            message.error("服务异常");
        }
        return Promise.reject(error)
    }
);
//基地址
let base = '';

//通用方法
export const POST = (url, params={}) => {
    return axios.post(`${base}${url}`, params, {
        transformRequest: [function (data) {
            let formData = new URLSearchParams();
            Object.keys(data).forEach(key => formData.append(key, data[key]));
            return formData;
        }]
    }).then(res => res.data)
};

export const GET = (url, params={}) => {
    return axios.get(`${base}${url}`, {
        params: params, paramsSerializer: params => {
            return qs.stringify(params, {indices: false})
        }
    }).then(res => res ? res.data : res)
};

export const PUT = (url, params={}) => {
    return axios.put(`${base}${url}`, params, {
        transformRequest: [function (data) {
            let formData = new URLSearchParams();
            Object.keys(data).forEach(key => formData.append(key, data[key]));
            return formData;
        }]
    }).then(res => res.data)
};

export const PUT_JSON = (url, params={}) => {
    return axios.put(`${base}${url}`, params).then(res => res.data)
};

export const DELETE = (url, params={}) => {
    return axios.delete(`${base}${url}`, {params: params}).then(res => res.data)
};

export const PATCH = (url, params={}) => {
    return axios.patch(`${base}${url}`, params).then(res => res.data)
};
