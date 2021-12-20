<template>
    <div class="event-wrapper">
			<h4 class="event-wrapper__title">EVENTS</h4>
      <div class="event-wrapper__content">
       <div class="event-wrapper__items">
        <router-link to="" class="event-wrapper__items__photo">
          <img src="../../assets/images/pages/sample-01.jpg" />
        </router-link>
        <div class="faq-wrapper__content__sub-title">
        <p> Bi-Annual Sample Sale </p>
        </div>
       </div>
       <div class="event-wrapper__items">
        <router-link to="" class="event-wrapper__items__photo">
          <img src="../../assets/images/pages/sample-02.jpg" />
        </router-link>
        <div class="event-wrapper__content__sub-title">
        <p> Muttonhead x Save Our Scruff Awareness Event </p>
        </div>
       </div>
      </div> 
    </div> 
</template>


<style lang="scss" scoped>
.event-wrapper {
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
  

   &__content{
  display: flex;
  justify-content: center;
  flex-direction: row;
  letter-spacing: 0.75px;
  line-height: 200%;
  padding: 20px 0;
  }
  &__items{
    display: flex;
    flex-direction: column;
    padding:0% 20px;
    align-items: center;
    &__photo img{
    object-fit: cover;
    display: block;
   width: 458px;
 height: 458px;
    }
  } 
}





</style>