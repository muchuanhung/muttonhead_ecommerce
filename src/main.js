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


//新增輪播效果
import VueAwesomeSwiper from 'vue-awesome-swiper'
import swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
import introswiper from './views/HomePage.vue';
Vue.component('intro-swiper', introswiper);

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
swiper.use([Navigation, Pagination, Autoplay, EffectFade])

Vue.config.productionTip = false
Vue.use(VueSweetalert2); 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
