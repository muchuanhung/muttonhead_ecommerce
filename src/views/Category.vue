<template>
   <div id="category">
    <!-- Sidebar 側邊欄位 -->
    <Sidebar />

    
    <!-- Products 全部產品-->
    <Products />
    

    <!-- 分頁標籤 RestaurantPagination -->
    <Pagination />
    

  </div>
</template>





<script>
import Sidebar from './../components/Sidebar'
import Products from "./Products.vue";
import Pagination from "../components/Pagination.vue";



export default {
  components: {
    Sidebar,
    Products,
    Pagination
  }
}
</script>

