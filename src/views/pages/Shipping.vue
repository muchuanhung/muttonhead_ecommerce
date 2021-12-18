<template>
    <div class="contact-wrapper">
			<h4 class="contact-wrapper__title">CONTACT US</h4>
      <div class="contact-wrapper__content">
        <p class="contact-wrapper__content-text">
          <strong>General Inquiries:</strong>store@muttonheadstore.com</p>
         <p class="contact-wrapper__content-text">
          <strong>Online Orders:</strong>shipping@muttonheadstore.com</p>       
       </div>  
       <div class="contact-wrapper__content-address">
          <strong>163 Roncesvalles Avenue, Toronto, ON.</strong>Phone number: 647-812-2700
       </div> 
    </div> 
</template>


<style lang="scss" scoped>
.contact-wrapper {
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
   flex-direction: column;
   text-align: center;
   letter-spacing: 0.75px;
   line-height: 200%;
   padding: 20px 0;
  }
   &__content-address{
   display: flex;
   letter-spacing: 0.75px;
   line-height: 150%;
   text-align: center;
   flex-direction: column;
  }
}
</style>