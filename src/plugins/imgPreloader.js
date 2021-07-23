//图片预加载
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
