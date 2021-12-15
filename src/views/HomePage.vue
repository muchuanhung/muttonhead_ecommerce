<template>
 <div class="home-content">
   <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
      <img src="./../assets/images/home-img-6.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="./../assets/images/home-img-3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="./../assets/images/home-img-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="./../assets/images/home-img-2.jpg" />
    </swiper-slide>
   
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
  </swiper>
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
         centeredSlides: true,
          autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },
        

          
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

  
.swiper {
   margin-top: 4.8rem;
  width: 100%;
  height: 550px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
     background-position: center;
      background-size: cover;
}

.swiper-slide img {
  display: block;
   width: 100%;
  height: 100%;
    overflow: hidden;
    object-fit: cover;
}


</style>