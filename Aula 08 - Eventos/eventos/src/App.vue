

<!--V-MODEL : Usado em formulários: serve mudarmos o valor da variavel tanto
  no elemento html (ex: input), quanto  no javascript. chamado de two-way data binding
 -->
 <!-- segunda direção: alterar valor da variavel name pela interface do usuario (input)-->

 <!--methods: é a onde colocamos todas as nossas funções e metódos que alterarão o valor de uma variavel existe em data (estado)-->

 <!--v-on:nomedoevento="(funcao)",
  podemos usar @nome do evento para reduzir a sintaxe

-->

<!-- os eventos por padrão passa por parametro o evento em si-->

<!--estudar modificadores de eventos na documentação e testar um por um,

  eles servem pra modificar o comportamento do evento, seja lá qual ele for!

  eex: 
  @click.once = só dispara uma vez o evento de clique
  @submit.prevent: parar a propragação: event.preventDefault() nos js
  @keyup.enter: só dispara quando apertar enter
-->

<template id="app">


<div>
  <button @click.once="handleClick">
    Enviar
  </button>
</div>
<br><br>

<div @mouseover="mouseEntrou" @mouseout="mouseSaiu">
  Mouse over
</div>
<br><br>

<form action="https://google.com" @submit.prevent="handleSubmit">
  <input type="text" @keyup="handleKeyUp" >
  <button type="submit">
    Enviar
  </button>
</form>



</template>



<script>


export default {
 name: 'App',
  data(){
    return {
    
      
    }
 },
 methods:{
  handleClick(event){
    console.log(event.target)

  },
  mouseEntrou(event){
    console.log('entrou', event)
  },
  mouseSaiu(event){
    console.log('saiu', event)
  },
  handleSubmit(event){
    console.log(event)
    
  },
  handleKeyUp(event){
    console.log(event)
  }

 }
}
</script>

<style>
  .title {
    font-size: 1.25rem;
    color: blue;

  }

  
  .title-home{
    font-size: 2.5rem;
    color: green;
  }

  .text{
    font-size: 1.125rem;
    color: red;
  }
  .text-home{
    font-size: 1.5rem;
    color: aquamarine;
  }

  .todos-item{
    background-color: #000;
    margin:  0 0 .5rem 0;
    padding: .5rem 1rem;
    color: #fff;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
