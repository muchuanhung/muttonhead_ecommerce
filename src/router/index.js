import Vue from 'vue'
import VueRouter from 'vue-router'


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
    component: () => import('../views/HomePage.vue')
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
  //分類頁
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue')
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
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router

     
   