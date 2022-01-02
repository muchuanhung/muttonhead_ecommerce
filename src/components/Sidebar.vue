<template>
<sidebar>
  <!-- search-box -->
   <div class="product-content-nav-search">
      <input
        type="text"
        placeholder="Search..."
      />
      <button type="submit" class="btn btn-primary"  @click.prevent="filterItem">
        <i class="fas fa-search"></i>
      </button>
    </div>

  <div class="sidebars">
   <ul>
     <!-- 綁定click事件  -->
     <div class="sidebars__group" >
         
           <div class="sidebars__group__icons" @click.stop.prevent="isShowRouteDropdown = !isShowRouteDropdown" >
             CATEGORY
             <!-- Icon Switch -->
             <span  v-show="!isShowRouteDropdown">
             <i class="fas fa-angle-down"></i></span>
              <span  v-show="isShowRouteDropdown">
             <i class="fas fa-angle-up"></i></span>
           </div>
        
        <!-- 連動展開submenu  -->
        <div v-show="isShowRouteDropdown" class="dropdown" >  
            <div class="dropdown__submenu" >
              <li
                v-for="category in categories"
                :key="category.id"
              >
              <router-link
               class="subcolor"
               v-model="selectedCategory"
               :to="{ name: 'categories', query: { categoryId: category.id } }"
              >
                {{ category.name }}
              </router-link>
              </li>

            </div>
        </div> 
     </div>    
   </ul>
  </div> 
</sidebar>  

</template>



<script>
export default {
  //變數資料宣告
  data(){
    return{
      isShowRouteDropdown: false,
    }
  },
  //分類標籤陣列排列
  	props:{
		  categories: {
		    type: Array,
		    require: true
		}
	},
  //搜尋產品關鍵字
}
</script>








