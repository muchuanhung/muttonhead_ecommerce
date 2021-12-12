<template>
  <header>
    <!-- Toolbar -->
    <div class="toolbar">
      <div class="toolbar_content">
        <div class="toolbar_item-menu">
          <router-link to="/About" class="router-link mr-3">About Us</router-link> 
        </div>
        <div class="toolbar_item-icons">
          <router-link 
          to="https://www.pinterest.ca/muttonheadstore/" 
          class="router-link mr-3">
          <i class="fab fa-pinterest-p"></i>
          </router-link>  
          <router-link 
          to="https://www.instagram.com/muttonhead/" 
          class="router-link mr-3">
          <i class="fab fa-instagram"></i>
          </router-link>     
        </div>
      </div>
    </div>  
    <!-- 漢堡排 -->
    <div class="header__container">
      <input
        type="checkbox"
        name="navbar__toggle"
        id="navbar__toggle"
        class="navbar__toggle"
      />
      <label for="navbar__toggle" class="navbar__toggle-label"
        ><i class="fas fa-bars"></i
      ></label>
      <nav>
        <!-- nav-item-list -->
        <ul class="navbar__nav-list">
          <li
            v-for="navItem in navList"
            :key="navItem.title"
            class="navbar__nav-list__nav-item"
          >
            <router-link
              class="navbar__nav-list__nav-item__nav-link"
              :to="navItem.link"
            >
              {{ navItem.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="header-actions">
        <router-link to="" class="header-actions__header-link">
          <i class="fas fa-search"></i>
        </router-link>  
        <router-link to="" class="header-actions__header-link">
          <i class="far fa-user-circle"></i>
        </router-link> 
         <router-link to="" class="header-actions__header-link">
          <i class="fas fa-shopping-cart"></i>
        </router-link>      
      </div>
    </div>
    <!-- logo -->
    <router-link to="" class="header__brand">
      <img
        class="header__brand__logo-img"
        :src="require('./../assets/images/logo.png')"
        alt="MuttonHead logo"
      />
    </router-link>
     <!-- announcemount宣傳公告 -->
    <div>
    <announcement/>
    </div>
  </header>
</template>

<script>
import announcement from "./Announcement.vue";

const dummyData = {
  navList: [
    {
      title: "SHOP",
      link: "",
    },
    {
      title: "NEW ARRIVALS",
      link: "",
    },
    {
      title: "BEST SELLERS",
      link: "",
    },
    {
      title: "SALE",
      link: "",
    },
    {
      title: "GIFT SHOP",
      link: "",
    },
  ],
};

export default {
  components: {
    announcement,
  },
  data() {
    return {
      navList: dummyData.navList,
    };
  },
};
</script>
