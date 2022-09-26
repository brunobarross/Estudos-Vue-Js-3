<template>
		<div class="cards-wrapper">
			<AppProduct
			v-for="produto in $store.state.products" :key="produto.id" :produto="produto"
			/>
		</div>
</template>

<script>
import AppProduct from './AppProduct.vue';
	export default {
    components: { AppProduct }
}

</script>

<style scoped>
	.cards-wrapper{
		margin-top: 4rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}
</style>