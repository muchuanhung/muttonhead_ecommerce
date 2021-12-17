<template>
    <div class="about-wrapper">
			<h4 class="about-wrapper__title">ca ABOUT US</h4>

        <div class="about-wrapper__items">
          <router-link to="" class="about-wrapper__items__photo">
          <img src="./../assets/images/aboutus/about-01.png" />
          </router-link>

            <router-link to="" class="about-wrapper__items__photo">
          <img src="./../assets/images/aboutus/about-02.png" />
          </router-link>

            <router-link to="" class="about-wrapper__items__photo">
          <img src="./../assets/images/aboutus/about-03.png" />
          </router-link>
        </div>

    </div>


</template>


<style lang="scss" scoped>




.about-wrapper {
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

.about-wrapper__items__photo {
    overflow: hidden;
    padding: 10px 0;
}






</style>