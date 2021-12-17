<template>
    <div class="shop-wrapper">
			<h4 class="shop-wrapper__title">MUTTONHEAD BASE CAMP</h4>
      <h4 class="shop-wrapper__title-02">OUR SHOP & OFFICE</h4>
      <div class="shop-wrapper__address-content">
        <p  style="font-weight:bold;">163 Roncesvalles Ave.</p>
        <p  style="font-style:italic;">Toronto, Ontario</p>
        <p  style="font-style:italic;">CANADA</p>
        <p  style="font-style:italic;">(647) 812--2700</p>
      </div>  
      <div class="shop-wrapper__items">
        <router-link to="" class="shop-wrapper__items__photo">
          <img src="../../assets/images/pages/shop-address.jpg" />
        </router-link>
      </div>
    </div>
</template>


<style lang="scss" scoped>




.shop-wrapper {
  margin: 5rem 1rem 2rem 1rem;
  height: 100%;
  //處理溢版問題
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  &__title {
  display: flex;
  justify-content: center;
  padding: 30px;
	font-size: 2rem;
	font-weight: 700;
	color: #333;
	cursor: default;
  }
  &__title-02{
  display: flex;
  justify-content: center;
  padding: 5px;
	font-size: 2rem;
	font-weight: 700;
	cursor: default;
  color: #9d6262;
  }
   &__address-content{
  text-align: center;
  letter-spacing: 0.75px;
  line-height: 200%;
  padding: 20px 0;
  color: #5d887c;
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
.shop-wrapper__items__photo {
    overflow: hidden;
    padding-bottom: 10px;
}






</style>