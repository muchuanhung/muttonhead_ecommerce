import Vue from 'vue'
import App from './App.vue'
import router from './router'
//新增sass全局設定
import './assets/stylesheets/scss/main.scss'
//新增字型樣式
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
//新增提示樣式
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false
Vue.use(VueSweetalert2); 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
