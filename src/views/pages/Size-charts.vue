<template>
    <div class="size-wrapper">
			<h4 class="size-wrapper__title">SIZE CHART</h4>
      <div class="size-wrapper__items">
        <router-link to="" class="size-wrapper__items__photo">
          <img src="../../assets/images/pages/size-01.png" />
        </router-link>
         <p class="size-wrapper__items__text" style="font-weight:bold;">Don't see the Size Chart you're looking for? Check in the drop down menu of the product you're looking at, or let us know via the chat box!</p>
      </div>
    </div>
   
</template>


<style lang="scss" scoped>
.size-wrapper {
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
  &__items{
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
}
.size-wrapper__items__photo {
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.size-wrapper__items__text {
  max-width: 40%;
  text-align: center;
  letter-spacing: 0.75px;
  line-height: 200%;
}

.size-wrapper__items__photo  img {
 width: 50%;
}


</style>