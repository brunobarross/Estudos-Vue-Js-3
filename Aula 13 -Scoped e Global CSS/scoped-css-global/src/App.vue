

<template>
  <div> 
    <BaseCard/>

  </div>
</template>


<script>
import BaseCard from './components/BaseCard.vue';

  export default {
    name: 'App',
    components: { BaseCard },
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
  
