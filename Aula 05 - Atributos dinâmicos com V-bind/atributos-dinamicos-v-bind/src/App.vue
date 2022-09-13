


<!-- se tiver usando com web components isso funcionaria
  <div v-for="obj in todos">
    {{obj.title}}
  </div>,
  mas o correto é passar uma key para que renderize mais rápido, como no react.
  <div v-for="obj in todos" v-bind:key="obj.id">
    {{obj.title}}
  </div>,
  o v-bind diz que a key vai ser dinamica, se for sem ela, ele considera o valor da key uma string comum e não um dado.

-->

<!--V-BIND: v-bind:nomedapropriedade="valordinamico" -->

<!--v-bind:propriedade pode ser utilizada assim :propriedade-->



<template id="app">


  <div v-for="(todo, index) in todos" v-bind:key="todo.id" class="todos-item">
    <!--renderização condicional da imagem-->
    <img v-if="todo.imgSrc" v-bind:src="todo.imgSrc" v-bind:alt="todo.imgAlt">
    <!--fim da renderização condicional da imagem -->
    {{index}} - {{todo.title}}
  </div>

</template>



<script>


export default {
 name: 'App',
  data(){
    return {

      todos: [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false,
          "imgSrc": 'https://via.placeholder.com/150',
          "imgAlt": 'Foto do Altamiro',
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        }
      ]
      
    }
 }
}
</script>

<style>
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
