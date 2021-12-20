<template>
    <div class="faq-wrapper">
			<h4 class="faq-wrapper__title">FAQ</h4>
      <div class="faq-wrapper__content">
        <div class="faq-wrapper__content__sub-title">
        <p><strong>What currency are your prices listed in?</strong></p>
        </div>
        <p> You can select which currency you wish the prices to be displayed in by selecting the currency in the top right corner. When in your cart, all prices will adjust back to Canadian Dollars as that is what we charge in, but you will only be charged the prices shown and nothing additional.</p>
       
        

        <div class="faq-wrapper__content__sub-title">
        <p><strong> How can I pay? </strong></p>
        </div>
        <p> We accept Visa, Mastercard, and Paypal.</p>
        
        <div class="faq-wrapper__content__sub-title">
        <p><strong> How often do you restock? </strong></p>
        </div>
        <p> Restock is done on a seasonal basis. For our core pieces, we do our best to keep these items in stock year round. </p>

        <div class="faq-wrapper__content__sub-title">
        <p><strong> Where do you ship? </strong></p>
        </div>
        <p> We ship worldwide. </p>
        <p> Please note, all shipping charges are the responsibility of the buyer and will not be paid in part or in full by Muttonhead for any reason. </p>

        <div class="faq-wrapper__content__sub-title">
        <p><strong> When will you ship my order? </strong></p>
        </div>
        <p> Orders are shipped within 1-4 business days. Please refer to our Shipping page for more information on all shipping related questions. </p>

        <div class="faq-wrapper__content__sub-title">
        <p><strong> What are the taxes and duties I will have to pay? </strong></p>
        </div>
        <div class="faq-wrapper__content__section01">
        <p> This depends on where you are located. </p>
        <p> For Canadian orders taxes are applied and charged at checkout. </p>
        <p> For U.S & International orders taxes and duties are based off of your location and are charged at customs. </p>
        <p> *Please note Muttonhead does not cover the cost of taxes & duties. </p>
        </div>

        <div class="faq-wrapper__content__sub-title">
        <p><strong> Who do I contact if I am having trouble ordering online? </strong></p>
        </div>
        <p> Please contact shipping@muttonheadstore.com and we will get back to you as soon as possible, but please allow 24-48 hours for response. </p>

        <div class="faq-wrapper__content__sub-title">
        <p><strong> Where are you located? </strong></p>
        </div>
      
        <p> We are located in Toronto, Canada. We have two locations, one at 337 Roncesvalles Avenue and one at 163 Roncesvalles Avenue. </p>
        <p> Store hours are as follows: </p>
        <div class="faq-wrapper__content__section02">
        <p><strong> 163 Roncesvalles Avenue </strong></p>
        <p> Mon: 12-7 </p>
        <p> Tues: 12-7 </p>
        <p> Wed: 12-7 </p>
        <p> Thurs: 12-7 </p>
        <p> Fri: 12-7 </p>
        <p> Sat: 12-5 </p>
        <p> Sun: 12-5 </p>
        </div>
        
        <div class="faq-wrapper__content__sub-title">
        <p><strong> Where can I find more info about Muttonhead?  </strong></p>
        </div>
        <p> General inquiries email store@muttonheadstore.com </p>
        <p> Wholesale inquiries email sales@muttonheadstore.com </p>
        <p> PR & Press email store@muttonheadstore.comShipping inquiries email </p>
        <p> shipping@muttonheadstore.com</p>

        <div class="faq-wrapper__content__sub-title">
        <p><strong> My item went on sale after I ordered it! Can I get a refund? </strong></p>
        </div>
        <div class="faq-wrapper__content__section03">
        <p> Sale Adjustments: If a purchased item is marked down, Muttonhead offers a one-time price adjustment on your order under the following conditions: </p>
        </div>
          <ul>
            <li> &middot; Price adjustment request must be made within 7-days of your order being placed. </li> 
            <li> &middot; The same style and size must be in stock at the time of your price adjustment request. </li> 
            <li> &middot; The price difference must be refunded to gift card </li> 
          </ul>
        <div class="faq-wrapper__content__section03">
        <p> Promotional Adjustments: If a promotional discount is offered, (this includes Black Friday and Boxing Day) Muttonhead offers a one-time price adjustment on your order under the following conditions: </p> 
        </div> 
          <ul>
            <li> &middot; Price adjustment request must be made within 7-days of your order being placed. </li> 
            <li> &middot; The same style and size must be in stock at the time of your price adjustment request. </li> 
            <li> &middot; The price difference must be refunded to gift card </li> 
          </ul>

      </div>  
    </div> 
</template>


<style lang="scss" scoped>


.faq-wrapper {
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
   &__sub-title{
   padding-top: 30px; 
   padding-bottom: 10px;  
   }
   &__section01{
   line-height: 300%;
   padding-bottom: 20px;  
   }
   &__section02{
   line-height: 300%;
   padding-bottom: 20px;    
   }
   &__section03{
   padding: 30px 0;  
   }
   &__section04{
   padding-bottom: 20px;
   display: flex;
   flex-direction: column;  
   }
   
   &__section05{
   padding: 30px 0;  
   }
   &__section06{
   padding-bottom: 20px;  
   } 
   &__section07{
   padding: 30px 0;  
   }
   &__section08{
   padding: 30px 0;
    line-height: 300%;  
   }
  }

}
</style>