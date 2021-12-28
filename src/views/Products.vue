<template>
	<products>
    <div class="products-wrapper">
			<!-- product list -->
			<!-- products will be rendered here -->
			<div class="products-wrapper__picture">
				<img class="products-wrapper__picture-product" :src="product.productImg">
				<img class="products-wrapper__picture-wear" :src="product.wearingImg">
			</div>
			<div class="products-wrapper__info">
					<p class="products-wrapper__info__title">{{product.name}}</p>
					<p class="products-wrapper__info__price">{{product.price}}</p>
			</div>        
    </div> 
	</products>
</template>






<script>
export default {
	props:{
		initialproduct: {
		type: Object,
		require: true
		}
	},

	data() {
		return {
			product: this.initialproduct,
		}
	},
}
</script>