  <template>
   <!-- pagination -->
	<div class="pagination justify-content-center">
		<!-- 回到上一頁 previousPage -->
		<li class="page-item disabled">	
		 <router-link
		 	class="page-link"
      tabindex="-1"
      :to="{
      name: 'Products',
      query: { categoryId, page: previousPage }
      }"
		 >
			  <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
		 </router-link>
		</li>
		<!-- 頁碼 -->
		<!-- v-for頁面迴圈v-on綁定頁面還有currentpage狀態 -->
		<li
			v-for="page in totalPage"
			:key="page"
			:class="['page-item', { active: currentPage === page }]"
			>
	
		<router-link
			class="page-link"
			:to="{name: 'Products', query: { categoryId, page }}"
			>
			{{ page }}
		</router-link>
		</li>	

		<!-- 前往下一頁 nextPage -->
		<li class="page-item">	
		 <router-link
		 	class="page-link"
      :to="{
      name: 'Products',
      query: { categoryId, page: nextPage }
      }"
		 >
			  <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
		 </router-link>
		</li>
	</div>
  </template>




	<script>
	export default {
		name: 'Pagination',
		props: {
			categoryId: {
				type: [Number, String],
				default: ''
			},
			currentPage: {
				type: Number,
				default: 1
			},
			totalPage: {
				type: Array,
				require: true
			},
			previousPage: {
				type: Number,
				require: true
			},
			nextPage: {
				type: Number,
				require: true
			}
		}
	}
	</script>
	