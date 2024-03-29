import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import 'ant-design-vue/dist/antd.less'
import * as util from './util/util';
import Antd from 'ant-design-vue';
Vue.config.productionTip = false;
Vue.prototype.$util=util;
Vue.use(Antd);

const requireComponent = require.context(
    // Look for files in the current directory
    './components/base',
    // Do not look in subdirectories
    false,
    /\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = fileName
    // Remove the "./" from the beginning
        .replace(/^\.\//, '')
        // Remove the file extension from the end
        .replace(/\.\w+$/, '')
        // Split up kebabs
        .split('-')
        // Upper case
        .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
        // Concatenated
        .join('')
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})
// 添加全局方法，命名以global开头
Vue.mixin({
	methods:{
		globalUrl(value){
			return util.baseUrl+value;
		}
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
