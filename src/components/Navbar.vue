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
     <!-- Navagation area -->
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

      <!-- head logo -->
      <div class="header-container__navagation__brand">
      <router-link 
      to="/HomePage" 
      class="router-link mr-3">
      <img
        :src="require('./../assets/images/logo.png')"
        alt="MuttonHead logo"
      />
      </router-link>
      </div>
        
      <!-- head actions02 -->
        <div class="header-container__navagation__header-actions02">
          <router-link to="" class="">
            <i class="far fa-user-circle"></i>
          </router-link> 
          <router-link to="" class="">
            <i class="fas fa-shopping-cart"></i>
          </router-link>      
        </div>
      
    </div> 
    <!-- category area -->
    <div class="header-container__category">
      <div class="header-container__category__expand">
        <router-link to="/category" class="action">SHOP</router-link>
        <router-link to="/category" class="action">NEW ARRIVALS</router-link>
        <router-link to="/category" class="action">BEST SELLERS</router-link>
        <router-link to="/category" class="action">SALE</router-link>
        <router-link to="/category" class="action">GIFT SHOP</router-link>
      </div>
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
