<template>
   <div id="category">
    <!-- Sidebar 側邊欄位 -->
    <Sidebar />

    
    <!-- Products 全部產品-->
    <!-- 用v-for迴圈的v-on綁定產品id再用v-bind把object回傳回卡片-->
    <Products 
      v-for="product in Products"
      :key="product.id"
      :product="product"
       />
    

    <!-- 分頁標籤 RestaurantPagination -->
    <Pagination />
    

  </div>
</template>





<script>
import Sidebar from './../components/Sidebar';
import Products from "./Products.vue";
import Pagination from "../components/Pagination.vue";

//導入產品種子資料
const dummyData = {
  
  Products: [
  {
    id: 1,
    name: "Classic fit T-shirt in white",
    price: "19.99",
    productImg:
			"https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
 {
		id: 2,
		name: "Logo T-shirt in black",
		price: "29.99",
		productImg:
			"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 3,
		name: "Skate hoodie in white",
		price: "39.99",
		productImg:
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 4,
		name: "Fit logo T-shirt in black",
		price: "25.0",
		productImg:
			"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 5,
		name: "Classic shirt in white",
		price: "45.0",
		productImg:
			"https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1612541122840-bf7071c968a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 6,
		name: "Slim fit shirt in blue",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1602810316693-3667c854239a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1563389234808-52344934935c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 7,
		name: "Neck Jumper in beige",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1606776627878-b7100e2984c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 8,
		name: "Classic fit T-shirt in white",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 9,
		name: "Logo T-shirt in black",
		price: "29.99",
		productImg:
			"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 10,
		name: "Skate hoodie in white",
		price: "39.99",
		productImg:
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 11,
		name: "Fit logo T-shirt in black",
		price: "25.0",
		productImg:
			"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 12,
		name: "Classic shirt in white",
		price: "45.0",
		productImg:
			"https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1612541122840-bf7071c968a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 13,
		name: "Slim fit shirt in blue",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1602810316693-3667c854239a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1563389234808-52344934935c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 14,
		name: "Neck Jumper in beige",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1606776627878-b7100e2984c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 15,
		name: "Classic fit T-shirt in white",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 16,
		name: "Logo T-shirt in black",
		price: "29.99",
		productImg:
			"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 17,
		name: "Skate hoodie in white",
		price: "39.99",
		productImg:
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	},
	{
		id: 18,
		name: "Fit logo T-shirt in black",
		price: "25.0",
		productImg:
			"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "日本料理",
    },
	}
],
categories: [
        {
            id: 1,
            name: "TOPS",
        },
           {
            id: 2,
            name: "Longsleeve Shirts",
        },
          {
            id: 3,
            name: "Buttondown Shirts",
        },
          {
            id: 4,
            name: "Appearel",
        },
          {
            id: 5,
            name: "Accessories",
        },
          {
            id: 6,
            name: "Outerwear",
        },
          {
            id: 7,
            name: "New Arrivals",
        }  
    ],
 categoryId: "",
    page: 1,
    totalPage: [1, 2, 3, 4, 5, 6],
    prev: 1,
    next: 2
  };



export default {
  name: 'products',
  components: {
    Sidebar,
    Products,
    Pagination
  },
  //挑選data函式會用到的資料
   data() {
    return {
      Products:[],
      categories: [],
      //表示要顯示那些id產品
      categoryId: -1,
      currentpage: 1,
      totalPage: -1

    };
  },
  //觸發fetchProductsData函式
  created() {
    this.fetchProductsData();
  },
  methods: {
    fetchProductsData() {
      //使用解構複值的方式
       const {
        Products,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.Products = Products
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  },
};  

</script>

