<template>
   <!-- sidebar -->
<sidebar>
  <nav class="sidebars">
   <ul>
     <!-- 綁定click事件  -->
     <div class="sidebars__group" >
         
           <div class="sidebars__group__icons" @click.stop.prevent="isShowRouteDropdown = !isShowRouteDropdown">
             CATEGORY
             <!-- Icon Switch -->
             <span  v-show="!isShowRouteDropdown">
             <i class="fas fa-angle-down"></i></span>
              <span  v-show="isShowRouteDropdown">
             <i class="fas fa-angle-up"></i></span>
           </div>
        
        <!-- 連動展開submenu  -->
        <div v-show="isShowRouteDropdown" class="dropdown">
          <router-link to="#" class="subcolor">Tops</router-link>
            <div class="dropdown__submenu">
              <li><router-link to="#" class="subcolor">Longsleeve Shirts</router-link></li>
              <li><router-link to="#" class="subcolor">Buttondown Shirts</router-link></li>
            </div>
        </div> 
     </div> 

      <div class="sidebars__groups">
           <div class="sidebars__group__icons" @click.stop.prevent="isShowRouteDropdown02 = !isShowRouteDropdown02">
             SHOP
              <!-- Icon Switch -->
              <span  v-show="!isShowRouteDropdown02">
              <i class="fas fa-angle-down"></i></span>
              <span  v-show="isShowRouteDropdown02">
              <i class="fas fa-angle-up"></i></span>
           </div>
        <div v-show="isShowRouteDropdown02" class="dropdown">
           <div class="dropdown__submenu">
            <li><router-link to="#" class="subcolor"><strong>Appearel</strong></router-link></li>
            <li><router-link to="#" class="subcolor">Accessories</router-link></li>
            <li><router-link to="#" class="subcolor">Outerwear</router-link></li>
            <li><router-link to="#" class="subcolor"><strong>New Arrivals</strong></router-link></li>
           </div> 
        </div> 
     </div> 
     
     
   
   </ul>
  </nav> 

</sidebar>  
</template>



<script>
export default {
  data(){
    return{
      isShowRouteDropdown: false,
      isShowRouteDropdown02: false,
    }
  },
}
</script>








