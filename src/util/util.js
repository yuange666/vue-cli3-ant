//网络请求的baseUrl
export const baseUrl='/api';
//成都天府广场经纬度
export const CDcenter=[104.063344,30.65988];
//重置对象里的所有属性值为某值,参数obj为一层对象结构，v为重置的值
export const resetObject = (obj, v) => {
    let res = {};
    for (let k in obj) {
        res[k] = v;
    }
    return res
};
//参数obj为多层对象
export const deepClone=(obj)=>{
    return JSON.parse(JSON.stringify(obj))
};
//参数：arraybuffer：二进制流;filename:下载后的文件名
export const downloadFile = function (arraybuffer, filename) {
    let blob = new Blob([arraybuffer], {
        type: 'application/octet-stream'  // 下载的文件类型格式（二进制流，不知道下载文件类型可以设置为这个）, 具体请查看HTTP Content-type 对照表
    });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.setAttribute('download', filename);   // 设置下载的文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);       //下载完成移除dom元素
    URL.revokeObjectURL(url);     //释放掉blob对象
};
//判断一个对象是否为空对象{}
export const judgingEmptyObj=function (obj) {
    return Object.keys(obj).length===0
};
export const getDistance = (lat1, lng1, lat2, lng2) => {
    let radLat1 = lat1 * Math.PI / 180.0;
    let radLat2 = lat2 * Math.PI / 180.0;
    let a = radLat1 - radLat2;
    let b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    s = s * 6378.137;// EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000;
    return s;
};
//去除字符串前后空格
export const trim=(str)=>{
    return str.replace(/(^\s+)|(\s+$)/g,'');
};
//生成某个范围内的随机整数(r>=min&&r<=max)
export const random=(min, max)=> {
    return Math.round(Math.random() * (max - min)) + min;
};
//能够访问所有页面的权限名称
export const roleAdmin='生态环境局';
//下载中的按钮文案
export const downloadText={
    loading:'下载中...',
    warnText:'导出中，请勿刷新网页和重复点击!',
    exportLoading:'导出中...'
};
//判断一个数组是不是全是某个值
export const judgeArrAllValue=(arr, value)=> {
    let flag = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== value) {
            flag = false;
            break;
        }
    }
    return flag;
};
//防抖，参数fn为函数名，delay为延时毫秒，调用方法：debounce(running,200)，返回的是一个新的匿名函数；
export function debounce(fn, delay) {
    let timer; // 维护一个 timer
    return function () {
        let _this = this; // 取debounce执行作用域的this
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
        }, delay);
    };
}

//节流，参数fn为函数名，delay为延时毫秒，调用方法：debounce(running,200)，返回的是一个新的匿名函数；
export function throttle(fn, delay) {
    let timer;
    return function () {
        let _this = this;
        let args = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            fn.apply(_this, args);
            timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
        }, delay)
    }
}

