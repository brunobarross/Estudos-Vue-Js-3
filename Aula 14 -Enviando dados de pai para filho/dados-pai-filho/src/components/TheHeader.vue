



<template>
	<header class="header">
		<h1>
			<slot name="title"/>
		</h1>
		<div class="subtitle">
			<slot name="subtitle"/>
		</div>
		<div v-if="$slots.default" class="content">
			<slot/>
		</div>
	</header>
</template>

<script>

export default {
	mounted(){
		//tem acesso aos slots dentro do target
		console.log(this.$slots);

	}
}

</script>

<style>
  .header{
    background-color: #000;
    color: #fff;
    padding: .5rem 0;
  }

</style>