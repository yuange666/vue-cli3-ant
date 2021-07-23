//图片预加载函数，参数：imgs的数据结构为['xxx.com/p1.png','xxx.com/p1.png'];数组元素为图片的加载地址
const imgPreloader = url => {
	return new Promise((resolve, reject) => {
		let image = new Image();
		image.onload = () => {
			resolve();
		};
		image.onerror = () => {
			reject();
		};
		image.src = url;
	});
};
export const imgsPreloader = imgs => {
	let promiseArr = [];
	imgs.forEach(element => {
		promiseArr.push(imgPreloader(element));
	});
	return Promise.all(promiseArr);
};
