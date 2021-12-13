<template>
  <header>
    <!-- Toolbar -->
      <div class="toolbar">
        <div class="toolbar__item-menu">
          <router-link to="/About" class="router-link mr-3">About Us</router-link> 
        </div>
        <div class="toolbar__item-icons">
          <router-link 
          to="https://www.pinterest.ca/muttonheadstore/" 
          class="toolbar__item-icons__social">
          <i class="fab fa-pinterest-p"></i>
          </router-link>  
          <router-link 
          to="https://www.instagram.com/muttonhead/" 
          class="toolbar__item-icons__social">
          <i class="fab fa-instagram"></i>
          </router-link>     
        </div>
      </div> 
  <!-- Header-area -->
  <div class="header-container">
    <div class="header-container__navagation">
      <!-- 漢堡排 -->
      <input
        type="checkbox"
        name="navbar__toggle"
        id="navbar__toggle"
        class="navbar__toggle"
      />
      <label for="navbar__toggle" class="navbar__toggle-label"
        ><i class="fas fa-bars"></i
      ></label>

      <!-- logo -->
      <div class="header-container__navagation__brand">
      <router-link to="" class="brand-header-link">
      <img
        :src="require('./../assets/images/logo.png')"
        alt="MuttonHead logo"
      />
      </router-link>
      </div>
      <!-- head actions01 -->
      <div class="header-container__navagation__header-actions01">
        <router-link to="" class="header-actions__header-link">
          <i class="fas fa-search"></i>
        </router-link>
     </div>

      <!-- head actions02 -->
       <div class="header-container__navagation__header-actions02">
        <router-link to="" class="header-actions__header-link">
          <i class="far fa-user-circle"></i>
        </router-link> 
         <router-link to="" class="header-actions__header-link">
          <i class="fas fa-shopping-cart"></i>
        </router-link>      
      </div>
    </div> 
      <!-- head category -->
        <div class="header-container__category">
          <router-link to="" class="router-link mr-3">廚房餐桌</router-link>
          <router-link to="" class="router-link mr-3">空間佈置</router-link>
          <router-link to="" class="router-link mr-3">質感生活</router-link>
          <router-link to="" class="router-link mr-3">品味衣著</router-link>
          <router-link to="" class="router-link mr-3">所有分類</router-link>
          <router-link to="" class="router-link mr-3">關於我們</router-link>    
        </div>   
     <!-- announcemount宣傳公告 -->
      <div>
      <announcement/>
      </div> 
  </div>
  
  </header>
</template>

<script>
import announcement from "./Announcement.vue";

export default {
  components: {
    announcement,
  },
};
</script>
