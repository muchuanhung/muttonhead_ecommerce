<template>
<footer>

  <div class="footer-container">
    <div class="footer-container__brand">
      <!-- Email_area -->
      <div class="footer-container__brand__email">
        <h2 class="footer-container__brand__email__title">HEADS UP!</h2>
        <p>Stay up to date on the latest product releases, special offer & news by signing up for our newsletter.</p>
        <div class="footer-container__brand__email__newsletter">
					<input type="text" 
          placeholder="Enter your email" 
          class="footer-container__brand__email__newsletter__input"
          autocorrect="off"
          autocapitalize="off"
          >
					<button type="submit"
          class="footer-container__brand__email__newsletter__btn">
          <i class="far fa-envelope"></i>
          </button>
				</div>

         <div class="footer-container__brand__email__icons">
          <router-link 
          to="https://www.pinterest.ca/muttonheadstore/" 
          class="footer-container__brand__email__icons__social">
          <i class="fab fa-pinterest-p"></i>
          </router-link>  
          <router-link 
          to="https://www.instagram.com/muttonhead/" 
          class="footer-container__brand__email__icons__social">
          <i class="fab fa-instagram"></i>
          </router-link>     
        </div>
      </div>
      <!-- Info_area01 -->
      <div class="footer-container__brand__info-column">
        <h2 class="footer-container__brand__info-column__title">GENERAL INFO</h2>
        <ul class="footer-container__brand__info-column__info-list">
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to="/About"
              class="footer-container__brand__info-column__info-list__item__link"
              >About Us</router-link
            >
          </li>
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Our Shop</router-link
            >
          </li>
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Brand Ambassador Program</router-link
            >
          </li>
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Size Charts</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Info_area02 -->
      <div class="footer-container__brand__info-column">
        <h2 class="footer-container__brand__info-column__title">HELP</h2>
        <ul class="footer-container__brand__info-column__info-list">
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Contact Us</router-link
            >
          </li>
          <li class="footer-container__brand__info-column__info-list__item">
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
      <div class="footer-container__brand__info-column">
        <h2 class="footer-container__brand__info-column__title">SOCIAL</h2>
        <ul class="footer-container__brand__info-column__info-list">
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Brand Ambassdors</router-link
            >
          </li>
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Events</router-link
            >
          </li>
          <li class="footer-container__brand__info-column__info-list__item">
            <router-link
              to=""
              class="footer-container__brand__info-column__info-list__item__link"
              >Mutt of the Month</router-link
            >
          </li>
        </ul>
      </div>
    </div>  
      <!-- Copyright_bottom -->
    <div class="footer-container__copyright">
      <p>&copy; 2021 MuttonHead. All Rights Reserved</p>
    </div>

    </div>
  </footer>
</template> 