<template>
    <div class="whole-wrapper">
			<h4 class="whole-wrapper__title">WHOLESALE & CUSTOM ORDERS</h4>
      <div class="whole-wrapper__content">
        <div class="whole-wrapper__content__section01">
        <p> If you have any inquiries related to our wholesale program, please email <strong>store@muttonheadstore.com</strong> with details of products and quantities you're interested in.</p>
        </div>
        <div class="whole-wrapper__content__section02">
        <p> Did you know we do Corporate Bulk Orders? Email us <strong>@muttonheadstore.com</strong> if your business is interested in learning more about our Corporate Plan!</p>
        </div>
        

      </div>  
    </div> 
</template>


<style lang="scss" scoped>


.whole-wrapper {
  margin: 5rem 1rem 2rem 1rem;
  //處理溢版問題
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
  cursor: default;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  &__title {
  display: flex;
  justify-content: center;
  padding: 30px;
	font-size: 2rem;
	font-weight: 700;
  }

   &__content{
   width: 768px;
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin-left: 30%;
   letter-spacing: 0.75px;
   line-height: 150%; 
   &__section01{
   padding: 30px 0;  
   }  
  &__section02{
   padding: 30px 0;  
   } 
  }

}
</style>