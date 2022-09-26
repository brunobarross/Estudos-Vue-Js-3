<template>
	<div class="card">
		<h3>{{produto.name}}</h3>
		<p>R$ <span>{{produto.price.toFixed(2).replace('.', ',')}}</span></p>

		<button @click="addProduct">Adicionar</button>
		<button @click="removeProduct">Remove</button>

	</div>
</template>

<script>
	export default {
		props:{
			produto: Object
		},
		methods:{
			addProduct(){
				this.$store.commit('addProduct', this.produto)
			},
			removeProduct(){
				this.$store.commit('removeProduct', this.produto)
			}
		}
	}
</script>

<style scoped>

	.card{
		padding: .5rem 1rem;
		background-color: bisque;
		border-radius: 8px;

	}

	.card h3{
		font-size: 1.5rem;
		text-transform: capitalize;
		font-weight: 500;
	}

	.card p{
		font-size: .875rem;
		font-weight: 500;
		
	}

	.card p span{
		font-size: 1rem;
		font-weight: 600;
	}


</style>