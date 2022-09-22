<template>
<header class="header">Header</header>

</template>

<script>

  export default {
    mounted(){
      console.log('montou')
      window.addEventListener('resize', this.resize);
 
    },
    beforeUnmount(){
      // Destruir as nossas libs
      //Eventos
      //Listeners
      console.log('beforeUnmount')
      window.removeEventListener('resize', this.resize);
    },
    unmounted(){
      console.log('unmounted')

    },
    methods:{
      resize($evt){
        console.log($evt)

      }
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