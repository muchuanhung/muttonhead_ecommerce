import Vue from 'vue'
import VueRouter from 'vue-router'
//404 Not Found 頁面被呼叫的時機是「所有的路由都匹配不到的情況」
import PageNotFound from '../views/PageNotFound.vue'
//首頁
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  //component動態載入
  //設定根目錄-5轉址
  {
    path: '/',
    name: 'root',
    redirect: '/homepage'
  },
  //首頁
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  //分類頁
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue')
  },
  //商品頁面
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
   //所有商品
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  //結帳頁面
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  },
  //搜尋
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  //簡介
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  //搜索不到頁面
  {
  //星號 (*) 是萬用字元，這裡代表「所有的網址」
    path: '*',
    name: 'not-found',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})


export default router

     
   