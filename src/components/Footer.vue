<template>
<footer>

    <div class="footer-container">
      <!-- brand_area -->
      <div class="footer-container__brand">
        <router-link to="" class="footer-container__brand__link">
          <img
            :src="require('../assets/images/logo.png')"
            alt="Alpha Camp logo"
          />
          <h1 class="footer-container__brand__link__brand-name">ALPHA Shop</h1>
        </router-link>
      </div>
      <!-- Info_area01 -->
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">GENERAL INFO</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >About Us</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Our Shop</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Brand Ambassador Program</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Size Charts</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Info_area02 -->
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">HELP</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Contact Us</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Return & Exchange</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Shipping</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >FAQ</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Wholesale & Custom Orders</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Info_area03 -->
      <div class="footer-container__info-column">
        <h2 class="footer-container__info-column__title">SOCIAL</h2>
        <ul class="footer-container__info-column__info-list">
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Brand Ambassdors</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Events</router-link
            >
          </li>
          <li class="footer-container__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__info-column__info-list__item__link"
              >Mutt of the Month</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Copyright_bottom -->
      <div>
        <div class="brand-name">
          <span class="title" @click="goToGithub">Reshape </span>
          <span class="text">| Reshape Your Life</span>
        </div>
        <div>
          <p>&copy; 2020 Reshape. All Rights Reserved</p>
        </div>
      </div>

    </div>
  </footer>
</template> 