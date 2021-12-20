<template>
    <div class="shipping-wrapper">
			<h4 class="shipping-wrapper__title">SHIPPING</h4>
      <div class="shipping-wrapper__content">
        <div class="shipping-wrapper__content__section01">
        <div class="shipping-wrapper__content__sub-title">
        <p><strong>SHIPPING WITHIN CANADA:</strong></p>
        </div>
        <p> All Canadian orders are shipped using regular mail with Canada Post. Shipping times may vary.
        <p><strong> Regular Standard Shipping: </strong>1-8 business days from shipping confirmation date, depending on your location.</p>
        <p><strong> Express Shipping: </strong> 1-4 business days from shipping confirmation date, depending on your location. </p>
        <p><strong>**</strong> delays may occur with Canada Post during high peak shipping times, which we can not control.</p>
        </div>

        <div class="shipping-wrapper__content__section02">
        <div class="shippinh-wrapper__content__sub-title">
        <p><strong> SHIPPING WITHIN USA: </strong></p>
        </div>
        <div class="shipping-wrapper__content__section03">
        <p> All U.S. orders are shipped with USPS regular air mail with tracking. Shipping times can vary.</p> 
        </div>
        <p><strong> Regular Standard Shipping: </strong>2-10 business days from shipping confirmation date, depending on your location.</p> 
        <p><strong> Express Shipping: </strong> 1 - 5 business days from shipping confirmation date, depending on your location. </p>
        <strong>**</strong>Shipping delays may occur with USPS during high peak shipping times, which we can not control.
        <strong>**</strong>You may be required to pay customs taxes in order to receive your package. It is your responsibility to pay the fees associated your order. Should your package be returned to us because customs were not paid, you will be issued a store credit.
        </div>

        <div class="shipping-wrapper__content__section04">
        <div class="shippinh-wrapper__content__sub-title">
        <p><strong> INTERNATIONAL SHIPPING: </strong></p>
        </div>
        <p> All orders that are shipped outside of Canada and the U.S. are shipped Regular Air Mail with tracking. Shipping times may vary.
        Please allow 4-20 business days from shipping confirmation date for delivery to all international destinations. Once the package leaves our Muttonhead facilities we have no control over delivery times. </p>
        <p><strong>**</strong>You may be required to pay customs, VAT, duties, taxes in order to receive your package. Please review your country rules and regulations ahead of ordering. It is your responsibility to pay the fees associated your order. Should your package be returned to us because customs were not paid, you will be issued a store credit.</p>
        </div>

        <div class="shipping-wrapper__content__section05">
        <div class="shippinh-wrapper__content__sub-title">
        <p><strong> PICK UP IN STORE OPTION: </strong></p>
        </div>
        <p> This is an option for customers who are able to pick up their order in person during regular business hours! Orders that are ready for pick up will receive an email as soon as the order is packed and ready for pickup. This will either be the same day or up to 3 business days from the date the order is placed.  Please have your order number and valid photo ID with you upon pickup. Please do not come in before you receive the confirmation email that your order is ready for pick up as we may not have your item(s) ready.</p>
        </div>

        <div class="shipping-wrapper__content__section06">
        <div class="shippinh-wrapper__content__sub-title">
        <p><strong>  PLEASE NOTE: </strong></p>
        </div>
        <p><strong>**</strong>If your package is lost in transit, this is the issue of the shipping company used. We will do our best to accommodate the issue, but we do need to file a claim. Your patience during these circumstances is appreciated!</p>
        <p><strong>**</strong>It is the responsibility of the customer to provide a safe location for your package to be delivered to. If a package is successfully delivered, but then stolen from your porch/location, we are not responsible. Please only ship your order to a secure location, whether that be an office or a family/friends house. </p> 
        </div>

        <div class="shipping-wrapper__content__section07">
        <p><strong>**</strong>Canada Post does not operate over the weekends. All orders placed after 3pm on Friday will not be shipped out until Monday.</p>
        </div>
        
        <div class="shippinh-wrapper__content__sub-title">
        <p><strong>F.A.Q.</strong></p>
        </div>

           <div class="shipping-wrapper__content__section08">
          <p style="font-weight:bold;"> Where do you ship?</p> 
          Canada, U.S and most international countries. 
          <p style="font-weight:bold;"> When will you ship my order? </p>
          All orders will be shipped within 1-4 business days. During peak holiday times and sale periods, this extends shipping times from 4 -7 business days.

          <p style="font-weight:bold;">Incorrect Address</p>
          Muttonhead is not responsible for return shipping if a customer enters the wrong shipping address during checkout. Please make sure you include your COMPLETE address when entering it in the checkout process. This includes your apartment number and the correct postal code.

          <p style="font-weight:bold;">Are shipping times guaranteed?
          We do not guarantee arrival times on Canadian/US/International shipments, as this can be effected by many factors.</p> 

          <p style="font-weight:bold;">What if my item is not delivered or is lost in transit?</p>
          Once parcels are collected from our shipping department, they are then property of Canada Post or USPS. Muttonhead is legally not responsible for lost or damaged goods. Please ensure shipping confirmation details are kept securely in case further investigation is required.

          <p style="font-weight:bold;">What are the taxes and duties I will have to pay?</p>
          This depends on your country. Please note all duties and taxes charged by customs of the destination country are the sole responsibility of the buyer and will not be refunded or reimbursed by Muttonhead for any reason. 
           </div>
      </div>  
    </div> 
</template>


<style lang="scss" scoped>


.shipping-wrapper {
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