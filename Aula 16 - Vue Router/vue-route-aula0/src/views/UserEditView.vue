<template>
	<div>
		Usuário
			<pre>
				ID:{{$route.params.id}}
				Página:{{$route.query.page}}

			</pre>

			<button @click="login">
				Entrar
			</button>
	</div>
</template>

<script>
	export default {
		created(){
			console.log(this.$route)
		},
		methods: {
			

			login(){
				
				this.$router.push({name: 'about'})
			}
		}
	}

</script>