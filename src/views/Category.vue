<template>
   <div class="category" @click="controlCartModel">
    <!-- Sidebar 側邊欄位 -->
    <Sidebar
      :categories="categories" 
    />

    
    <!-- Products 全部產品-->
    <!-- 用v-for迴圈的v-on綁定產品id再用v-bind把object回傳回卡片-->
    <div class="all__products-card" >
    <Products 
      class="product-content-items-card"
      v-for="product in Products"
      :key="product.id"
      :initialproduct="product"
       />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <Pagination
      v-if="totalPage.length > 1"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previous-Page="previousPage"
      :next-Page="nextPage"
      :category-Id="categoryId"
     />
    

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
    name: "FLEECE FIELD ZIP - BLACK RAINBOW SPECKLE",
    price: "$98.00 CAD",
    productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/BlackRainbow1_1800x1800.jpg?v=1638940854",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/BlackRainbow3_c43c356a-4462-41b8-ad84-a2bcd86d6c3e_1800x1800.jpg?v=1638940854",
    CategoryId: 1,
    Category: {
    id: 1,
    name: "TOPS",
    },
	},
 {
		id: 2,
		name: "THERMAL BASE LAYER - NATURAL RAINBOW WAFFLE",
		price: "$81.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/T_ThermalNaturel_e2c70b8a-63d4-4a05-a6a2-f4edb3689918_1800x1800.jpg?v=1638994733",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/T_ThermalNaturel2_1800x1800.jpg?v=1638995023",
    CategoryId: 1,
    Category: {
    id: 1,
    name: "TOPS",
    },
	},
	{
		id: 3,
		name: "PULLOVER CABIN HOODIE - WASHED FOREST",
		price: "39.99",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/greenHoodie_1800x1800.jpg?v=1639343229",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WashedBlack1_900x.jpg?v=1639343902",
    CategoryId: 1,
    Category: {
    id: 1,
    name: "TOPS",
    },
	},
	{
		id: 4,
		name: "MUTT LOGO LONGSLEEVE - WHITE",
		price: "$40.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WHiteLongDog_1800x1800.jpg?v=1639595570",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WHiteLongDog2_1800x1800.jpg?v=1639596508",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "Longsleeve Shirts",
    },
	},
	{
		id: 5,
		name: "MTN LOGO LONGSLEEVE - BLACK",
		price: "$40.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/BlackLongsleeve_1800x1800.jpg?v=1639592672",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/BlackLongsleeve2_1800x1800.jpg?v=1639592673",
    CategoryId: 2,
    Category: {
    id: 2,
    name: "Longsleeve Shirts",
    },
	},
	{
		id: 6,
		name: "OXFORD CARDIGAN - FOREST GREEN",
		price: "$62.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/cardigan_1800x1800.jpg?v=1616373108",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/cardigan2_900x.jpg?v=1616373108",
    CategoryId: 3,
    Category: {
    id: 3,
    name: "Buttondown Shirts",
    },
	},
	{
		id: 7,
		name: "WOMEN'S UTILITY SHIRT - SOFT FLANNEL - BLACK",
		price: "$130.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/NfblackWomensShirt1_1800x1800.jpg?v=1608175260",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/NfblackWomensShirt2_900x.jpg?v=1608175260",
    CategoryId: 3,
    Category: {
    id: 3,
    name: "Buttondown Shirts",
    },
	},
	{
		id: 8,
		name: "2022 ILLUSTRATED WALL CALENDAR - PARTY MOUNTAIN PAPER CO.",
		price: "$22.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/calendar_1800x1800.jpg?v=1640201114",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/calendar2_1800x1800.jpg?v=1640201114",
    CategoryId: 4,
    Category: {
    id: 4,
    name: "Appearel",
    },
	},
	{
		id: 9,
		name: "OXFORD PENNANT - CUT YOURSELF SOME SLACK CAMP FLAG",
		price: "$59.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/cut5_1800x1800.jpg?v=1639455581",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/cut7_1800x1800.jpg?v=16394555810",
    CategoryId: 4,
    Category: {
    id: 4,
    name: "Appearel",
    },
	},
	{
		id: 10,
		name: "BAMBOO CREW SOCK - PINK",
		price: "$14.00 CAD ",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/pink2_98998c2e-8850-4aa8-a350-ea8653f7f544_1800x1800.jpg?v=16059351220",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/pink_5a456f99-b36e-49fc-8f25-0862d9e8a7bb_900x.jpg?v=1605935122",
    CategoryId: 5,
    Category: {
    id: 5,
    name: "Accessories",
    },
	},
	{
		id: 11,
		name: "BAMBOO CREW SOCK - IVORY",
		price: "$14.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/white2_83767e17-f9d0-436c-9d13-b9f9a551d991_1800x1800.jpg?v=16059355060",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/white_278235fc-20ca-4879-805c-2cce2bb5ebb0_900x.jpg?v=1605935506",
    CategoryId: 5,
    Category: {
    id: 5,
    name: "Accessories",
    },
	},
	{
		id: 12,
		name: "CHORE COAT - LEOPARD PRINT",
		price: "$187.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/lepordchore_1800x1800.jpg?v=1633575484",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/lepordchore3_900x.jpg?v=1633575685",
    CategoryId: 6,
    Category: {
    id: 6,
    name: "Outerwear",
    },
	},
	{
		id: 13,
		name: "CHORE COAT - CLASSIC CAMO",
		price: "$187.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/CampChore_1800x1800.jpg?v=1633555343",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/CampChore2_900x.jpg?v=1633555343",
    CategoryId: 6,
    Category: {
    id: 6,
    name: "Outerwear",
    },
	},
	{
		id: 14,
		name: "PULLOVER CABIN HOODIE - WASHED RUST",
		price: "$100.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WashedRust_1800x1800.jpg?v=1639193126",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WashedRust3_900x.jpg?v=1639193127",
    CategoryId: 7,
    Category: {
    id: 7,
    name: "New Arrivals",
    },
	},
	{
		id: 15,
		name: "HEAVY WEIGHT TEE - WASHED RUST",
		price: "$34.00 CAD ",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/OrangeWashed_1800x1800.jpg?v=1639344959",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/OrangeWashed3_1800x1800.jpg?v=1639344960",
    CategoryId: 7,
    Category: {
    id: 7,
    name: "New Arrivals",
    },
	},
	{
		id: 16,
		name: "HEAVY WEIGHT LONGSLEEVE - WASHED RUST",
		price: "$48.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WashedOranggeLong_1800x1800.jpg?v=1639345651",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/WashedOranggeLong3_1800x1800.jpg?v=1639345651",
    CategoryId: 7,
    Category: {
    id: 7,
    name: "New Arrivals",
    },
	},
	{
		id: 17,
		name: "EASY SHIRT - BRUSHED HOUNDSTOOTH - SAND",
		price: "$185.00 CAD",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/brownHounslow3_1800x1800.jpg?v=1630606831",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/brownHounslow2_1800x1800.jpg?v=1630606831",
    CategoryId: 1,
    Category: {
    id: 1,
    name: "TOPS",
    },
	},
	{
		id: 18,
		name: "OXFORD PENNANT - GIVE A DAMN CAMP FLAG",
		price: "$59.00 CAD ",
		productImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/give_1800x1800.jpg?v=1639458409",
		wearingImg:
			"https://cdn.shopify.com/s/files/1/0153/0959/products/give3_1800x1800.jpg?v=1639458768",
    CategoryId: 4,
    Category: {
    id: 4,
    name: "Appearel",
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
      totalPage: [],
      previousPage: -1,
      nextPage: -1
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
    },
  },
   
 
};  

</script>

