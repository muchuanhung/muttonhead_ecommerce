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
import Sidebar from './../components/Sidebar';
import Products from "./Products.vue";
import Pagination from "../components/Pagination.vue";

//導入產品種子資料
const dummyData = [
  {
    id: 1,
    name: "Classic fit T-shirt in white",
    price: "19.99",
    productImg:
			"https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
	},
 {
		id: 2,
		name: "Logo T-shirt in black",
		price: "29.99",
		productImg:
			"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
	},
	{
		id: 3,
		name: "Skate hoodie in white",
		price: "39.99",
		productImg:
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
	},
	{
		id: 4,
		name: "Fit logo T-shirt in black",
		price: "25.0",
		productImg:
			"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
	},
	{
		id: 5,
		name: "Classic shirt in white",
		price: "45.0",
		productImg:
			"https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1612541122840-bf7071c968a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80"
	},
	{
		id: 6,
		name: "Slim fit shirt in blue",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1602810316693-3667c854239a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1563389234808-52344934935c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
	},
	{
		id: 7,
		name: "Neck Jumper in beige",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1606776627878-b7100e2984c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
	},
	{
		id: 8,
		name: "Classic fit T-shirt in white",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 9,
		name: "Logo T-shirt in black",
		price: "29.99",
		productImg:
			"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
	},
	{
		id: 10,
		name: "Skate hoodie in white",
		price: "39.99",
		productImg:
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
	},
	{
		id: 11,
		name: "Fit logo T-shirt in black",
		price: "25.0",
		productImg:
			"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
	},
	{
		id: 12,
		name: "Classic shirt in white",
		price: "45.0",
		productImg:
			"https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1612541122840-bf7071c968a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80"
	},
	{
		id: 13,
		name: "Slim fit shirt in blue",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1602810316693-3667c854239a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1563389234808-52344934935c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
	},
	{
		id: 14,
		name: "Neck Jumper in beige",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1606776627878-b7100e2984c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
	},
	{
		id: 15,
		name: "Classic fit T-shirt in white",
		price: "19.99",
		productImg:
			"https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
	},
	{
		id: 16,
		name: "Logo T-shirt in black",
		price: "29.99",
		productImg:
			"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
	},
	{
		id: 17,
		name: "Skate hoodie in white",
		price: "39.99",
		productImg:
			"https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
	},
	{
		id: 18,
		name: "Fit logo T-shirt in black",
		price: "25.0",
		productImg:
			"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
		wearingImg:
			"https://images.unsplash.com/photo-1583744999783-efe9dc5eac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
	},

];

















export default {
  components: {
    Sidebar,
    Products,
    Pagination
  },
   data() {
    return {
      userList: [],
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      this.userList = dummyData;
    },
  },
};  

</script>

