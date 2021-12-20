<template>

    <div class="brand-ambassador-wrapper">
			<h4 class="brand-ambassador-wrapper__title">BRAND AMBASSADOR PROGRAM</h4>
      <div class="brand-ambassador-wrapper__address-content">
        <p style="font-weight:bold;">Want to be a Muttonhead Brand Ambassador?</p>
        <p class="brand-ambassador-wrapper__address-content__text">Shoot us an email at rebecca@muttonheadstore.com with your details and you could have a chance at joining The Mutts! Check out some of the work our past Brand Ambassadors have shot</p>
        <router-link to="/brand-ambassadors" class="action">
        <p>Here</p>
        </router-link>
        
      </div>  
      <div class="brand-ambassador-wrapper__items">
        <router-link to="" class="brand-ambassador__items__photo">
          <img src="../../assets/images/pages/brand-ambassador.jpg" />
        </router-link>
      </div>
    </div>
   
</template>


<style lang="scss" scoped>
.brand-ambassador-wrapper {
  margin: 5rem 1rem 2rem 1rem;
  //處理溢版問題
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  cursor: default;
  
  &__title {
  display: flex;
  justify-content: center;
  padding: 30px;
	font-size: 2rem;
	font-weight: 700;
  }

   &__address-content{
  flex-direction: column;
  text-align: center;
  letter-spacing: 0.75px;
  line-height: 200%;
  padding: 20px 0;
  }
  &__items{
    display: flex;
    justify-content:space-around;
    flex-direction: column;
    align-items: center;
    &__photo img{
    object-fit: cover;
    display: block;
   height: 480px;
    width: 960px;
    }
  } 
}

.brand-ambassador-wrapper__address-content__text {
  text-align: center;
  letter-spacing: 0.75px;
  line-height: 200%;
}

</style>