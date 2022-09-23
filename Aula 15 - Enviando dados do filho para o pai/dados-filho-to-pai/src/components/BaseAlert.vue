
<!--
	this.$emit(): é o cara que manda o evento pro pai, usamos ele pq ele utiliza o v-on ou @ que é usado pra passarmos um evento em um componente ou elemento.

 -->

<template>
	<div :class="baseClass">

		<slot/>

		<button @click="handleClickOnX">
			X
		</button>

	</div>
</template>

<script>
	export default{
		props: {
			variant: {
				type: String,
				default: ''
			},

		},
		mounted(){

		},
		computed: {
			baseClass(){
				return ['alert',
				//se tiver variant imprima alert e o nome da variant
				this.variant ? `alert-${this.variant}` : ''
			]
			}

		},
		methods:{
			handleClickOnX(){
				this.$emit('close')
				console.log('clicou')
			}
		}
	}
</script>

<style scoped>
	.alert{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 600px;
		margin: 0 auto;
		background-color: #ddd;
		padding: 1rem;
		border-radius: 6px;
		color: gray;
		text-align: center;
	}
	.alert-success{
		background-color: #42b983;
		color: #fff;
	}

	.alert-danger{
		background-color: red;
		color: #fff;
	}

	button{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: none;
		outline: none;
		padding: .5rem;
		font-size: 1rem;
		cursor: pointer;
		border-radius: 4px;
	}
</style>