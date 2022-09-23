
<!-- componentes de visualização: card, alert, button, utiliza-se um prefixo para identificar o mesmo: ex: BaseCard-->

<!-- diferença props e slot: 
  props é pra trabalhar com comportamento do componente e slot é para conteudo
-->

<!-- props como classe: :class="['alert', {'alert-success': variant === 'success', 'alert-danger': variant === 'danger'}]-->

<!-- se tiver muita variante ficaria muito verboso, forma simplificada:
:class="`alert alert-${nomedaprop}`"

-->

<!-- QUANDO VOCÊ DESEJA CRIAR UM VALOR FINAL DE QUE DEPENDE DE OUTRO, UTILIZAMOS COMPUTED - NÃAAO ESQUEÇA BRUNO!-->


<!-- para definirmos um valor padrão pra uma props, tenho que transformar a propriedade props em um objeto, como no exemplo:

	props: {
		variant: {
			type: tipoDeDado (ex: String),
			default: valorpadraodavariant
		}
	}

-->




<template>
	<div :class="baseClass">
		{{test}}
		<slot/>

	</div>
</template>

<script>
	export default{
		props: {
			variant: {
				type: String,
				default: ''
			},
			test: {
				type: String,
				default: 'teste',
			}
		},
		mounted(){
			console.log(this.test)
		},
		computed: {
			baseClass(){
				return ['alert',
				//se tiver variant imprima alert e o nome da variant
				this.variant ? `alert-${this.variant}` : ''
			]
			}

		}
	}
</script>

<style scoped>
	.alert{
		max-width: 600px;
		margin: 0 auto;
		background-color: #ddd;
		padding: .5rem;
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
</style>