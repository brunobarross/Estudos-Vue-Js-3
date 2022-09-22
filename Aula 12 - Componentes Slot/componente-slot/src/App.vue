<!--slot dentro do componente permite que passamos qualquer valor dentro do local de onde o componente vai ser importado, ex:

  NO COMPONENTE :

  <header>
    <slot></slot>
  </header>

  NO LOCAL ONDE O COMPONENTE É CHAMADO:

  <TheHeader>
    <h1>Home</h1>
  </TheHeader>

-->


<!--SLOT NOMEADO: <slot name="nomedoslot"></slot> -->

<!-- V-SLOT: diretiva de definição do slot desejadom ex:
  <template v-slot:title></template
      <template v-slot:subtitle></template
-->



<template>
  <div> 
    <TheHeader>
      <template v-slot:title>
          Home
      </template>
      <template v-slot:subtitle>
          <p>Esse é um subtitulo</p>
      </template>

    </TheHeader>

  </div>
</template>


<script>
  import TheHeader from './components/TheHeader.vue';
  export default {
    name: 'App',
    components: {TheHeader},
    data(){
      return {
        nome: '',

      }
    },
    computed:{

    },
    watch: {
      
      
    },
    methods: {
     

    },
  }
</script>


<style>
  .title {
    font-size: 1.25rem;
    color: blue;
  }
  
  .title-home {
    font-size: 2.5rem;
    color: green;
  }
  
  .text {
    font-size: 1.125rem;
    color: red;
  }
  .text-home {
    font-size: 1.5rem;
    color: aquamarine;
  }
  
  .todos-item {
    background-color: #000;
    margin: 0 0 0.5rem 0;
    padding: 0.5rem 1rem;
    color: #fff;
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
  
