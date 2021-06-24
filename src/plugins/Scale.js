//======大屏缩放插件======
function getQueryVariable(variable) {
	let query = location.href.split('?')[1];
	if(query){
		let vars = query.split("&");
		for (let i = 0; i < vars.length; i++) {
			let pair = vars[i].split("=");
			if (pair[0] === variable) {
				return pair[1];
			}
		}
	}
}
export default {
	install(Vue,options){
		Vue.directive('scale', {
			// 当被绑定的元素插入到 DOM 中时……
			bind: function (el,binding) {
				if(!binding.value.width || !binding.value.height){
					return;
				}
				el.style.width=binding.value.width+'px';
				el.style.height=binding.value.height+'px';
				el.style.transformOrigin='left top';
				let scaleValue = getQueryVariable('scale');
				let currentRatioX = document.documentElement.clientWidth / binding.value.width;
				let currentRatioY = document.documentElement.clientHeight / binding.value.height;
				switch (scaleValue) {
					case '0':
						el.style.transform = `scale(${currentRatioX},${currentRatioY})`;
						break;
					case '1':
						el.style.transform = `scale(${currentRatioX})`;
						break;
					case '2':
						el.style.transform = `scale(${currentRatioY})`;
						break;
					default:
						el.style.transform = `scale(1)`;
				}
			}
		})
	}
}