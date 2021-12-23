<template>
 <div class="home-content">
   <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
      <img src="./../assets/images/home-img-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="./../assets/images/home-img-2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="./../assets/images/home-img-3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="./../assets/images/home-img-4.jpg" />
    </swiper-slide>
   
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  </swiper>

     <div class="section-wrapper">
			<h4 class="section-wrapper__title">SHOP NAKED & FAMOUS</h4>
        <div class="section-wrapper__items">

          <div class="section-wrapper__items-01">
            <router-link to="" class="section-wrapper__items-photo">
            <img src="./../assets/images/product-01.jpg" alt="Clothe Product"/>
            </router-link>
            <p class="section-wrapper__items__description action"> Naked & Famous Clothe</p>
          </div>

          <div class="section-wrapper__items-01">
            <router-link to="" class="section-wrapper__items-photo">
            <img src="./../assets/images/product-02.jpg" alt="Fragrance Product"/>
            </router-link>
            <p class="section-wrapper__items__description action"> Naked & Famous Fragrance</p>
          </div> 

          <div class="section-wrapper__items-01">
          <router-link to="" class="section-wrapper__items-photo">
          <img src="./../assets/images/product-03.jpg" alt="All product"/> 
          </router-link>
           <p class="section-wrapper__items__description action"> Shop All </p>
          </div>

        </div>
    </div>
 </div>

 
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

   export default {
    name: 'swiper-example-fade-effect',
    title: 'Fade effect',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
        spaceBetween: 30,
         effect: 'fade',
         grabCursor: true,
        loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },     
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.swiper {
  margin-top: 4.6rem;
  width: 100%;
  height: 550px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}


.section-wrapper {
  width: 100%;
  height: 100%;

  &__title {
  display: flex;
  justify-content: center;
  padding: 20px;
	font-size: 2rem;
	font-weight: 700;
	color: #333;
	cursor: default;
  }
  &__items{
    display: flex;
    justify-content: space-evenly;
    &__description{
    padding: 10px;
    display: block;
    text-align: center;
    } 
  } 
}
.section-wrapper__items-01 {
 margin-bottom: 10px;
}

.section-wrapper__items-photo {
    overflow: hidden;
    display: flex;
}

.section-wrapper__items-photo img {
  object-fit: cover;
  display: block;
  transition: transform .5s, filter 1.5s ease-in-out;
  height: 360px;
  width: 360px;
  transform: scale(1);
}

.section-wrapper__items-photo:hover img {
  transform: scale(1.1);
}





</style>