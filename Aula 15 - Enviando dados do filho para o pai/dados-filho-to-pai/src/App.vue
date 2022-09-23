
<!--
	this.$emit('nomeddoevento'): é o cara que manda o evento pro pai, usamos ele pq ele utiliza o v-on ou @ que é usado pra passarmos um evento em um componente ou elemento.

 -->

 <!-- @close passa a ser um evento personalizado pra esse componente -->

<!--
  DO PAI PRO FILHO UTILIZAMOS PROPS,
  DO FILHO PRO PAI UTILIZAMOS O EMIT

-->

<template>
  <div class="wrapper"> 
    <BaseAlert v-if="showAlert"
    :variant="variant" @close="onClose">
    {{text}}
  </BaseAlert>

  <button v-if="!showAlert" @click="showAlert = !showAlert" class="sendBtn">ENVIAR</button>


  
   

  </div>
</template>


<script>
import BaseAlert from './components/BaseAlert.vue';

  export default {
    name: 'App',
    components: { BaseAlert },
    data(){
      return {
        showAlert: true,
        variant: 'success',
        text: 'Seu formulário foi enviado'

      }
    },
    computed:{

    },
    watch: {
      
      
    },
    methods: {
      onClose(){
        this.showAlert = false;
      }
     

    },
  }
</script>


<style>

  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .sendBtn{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      padding: .5rem 1rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 4px;
      background: #333;
      color: #fff;
      margin-top: 2rem;
    }
  select{
    width: 100%;
    padding: .5rem 1rem;
  }


  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px auto;

  }
  </style>
  
