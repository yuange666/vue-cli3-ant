import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false;
import Antd from 'ant-design-vue';
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
