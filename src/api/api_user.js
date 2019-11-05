import * as API from "./";
export default {
    //登录
    login: params => {
        return API.POST('/enterprise/login', params)
    },
}
