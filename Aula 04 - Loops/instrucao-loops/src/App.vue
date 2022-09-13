
<!--Single file component-->
<!--em unico arquivo eu tenho html,css e js . Quando importo eu levo tudo desse componente, inclusive a lógica-->
<!--todos os components precisam ser .vue-->

<!--mesmo esquema de importar componentes dentro do app ou em qualquer outro componente desejado-->

<!--favor evitar nomes de componentes como Header, Section pois dá conflito com eslint-->
<!--precisa declarar os componentes dentro de components:{}-->

<!-- diretiva vue js, exemplo: v-nomequalquer -->

<!-- a diferença de v-show pro v-if: o v-show adiciona o estilo display none no elemento(componente) pra poder esconder ele ou mostrar a partir de uma váriavel reativa por exemplo

  com v-if o elemento realmente deixa de existir se a condição for falsa, exemplo:

  V-show:
  aqui o elemento passa a ter um display none caso a showHeader seja falsa:
   <TheHeader
    v-show="showHeader"
    />

      V-if:
  aqui o elemento nem existirá no código caso showHeader seja falsa:
   <TheHeader
    v-if="showHeader"
    />
-->

<!--usando váriavel vindo do data do componente em template html : {[variavel]}-->

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


<template id="app">
  <div v-for="(todo, index) in todos" v-bind:key="todo.id" class="todos-item">
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
          "completed": false
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
