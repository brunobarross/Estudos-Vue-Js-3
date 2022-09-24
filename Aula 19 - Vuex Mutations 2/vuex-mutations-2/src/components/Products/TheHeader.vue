<template>
	<header class="header">
		<a href="#" class="logo">Logo</a>
			<div class="icone-carrinho">
						{{$store.state.cart.length}}
			</div>
	</header>
</template>

<style scoped>
		.header{
			background-color: bisque;
			padding: .5rem 1rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.logo{
			color: #fff;
			font-size: 2rem;
			text-transform: uppercase;
			font-weight: 600;
		}

</style>