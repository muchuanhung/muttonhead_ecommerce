<template>
    <div class="about-wrapper">
			<h4 class="about-wrapper__title">ca ABOUT US</h4>

        <div class="section-wrapper__items">
          <router-link to="" class="sabout-wrapper__items-photo">
          <img src="./../assets/images/aboutus/about-01.png" />
          </router-link>

            <router-link to="" class="section-wrapper__items-photo">
          <img src="./../assets/images/aboutus/about-02.png" />
          </router-link>

            <router-link to="" class="section-wrapper__items-photo">
          <img src="./../assets/images/aboutus/about-03.png" />
          </router-link>
        </div>

    </div>


</template>


<style lang="scss" scoped>




.about-wrapper {
   margin-top: 4.6rem;
  width: 100%;
  height: 100%;

  &__items{
    display: flex;
    justify-content: space-evenly;
    &__description{
    padding: 10px;
    } 
  } 
}

.about-wrapper__items-photo {
   margin-top: 4.6rem;
  width: 100%;
  height: 100%;

  &__items{
    display: flex;
    justify-content: space-evenly;
    &__description{
    padding: 10px;
    } 
  } 
}



</style>