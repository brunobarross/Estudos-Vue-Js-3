


<!-- classe para estilos css:

  Primeira forma ex:
<h1 :class="classVar">Curso Vue 3 </h1>,
dentro do :class podemos passar valores, objetos ou array, sendo assim podemos trabalhar com condicionais também a partir de um boleano

<h1 :class="{'title': true, 'title-home': isHome}">Curso Vue 3 </h1>,

explicado: um objeto, a key é a classe, e o valor da key é o que determina se a classe deve ser adicionada ou não.
Posso também usar um array de multiplas classes:
<p :class="['text' 'text-green', {'text-home': isHome}]">Este é um paragrafo Este é um paragrafo Este é um paragrafo Este é um paragrafo</p>

se ficar muito grande posso reduzir, por exemplo:
<p :class="pClass">Este é um paragrafo Este é um paragrafo Este é um paragrafo Este é um paragrafo</p>

-->


<!-- Tag style para estilos css:
<p :style="{'color': 'aqua', 'background-color': 'black'}">
  Este é um segundo paragrafo Este é um paragrafo Este é um paragrafo Este é um paragrafo
</p>

ou posso fazer passando uma variavel:
 <p :style="estilosAtributo">
  Este é um segundo paragrafo Este é um paragrafo Este é um paragrafo Este é um paragrafo
</p>

estilosAtributo: {'color': 'aqua', 'background-color': 'black'};

se eu não quiser usar entre aspas, posso usar os styles do javascript em cammel case:

estilosAtributo: {'color: 'aqua', backgroundColor: 'black'};

-->






<template id="app">

<h1 :class="{'title': true, 'title-home': isHome}">Curso Vue 3 </h1>
<p :class="pClass">Este é um paragrafo Este é um paragrafo Este é um paragrafo Este é um paragrafo</p>

<p :style="estilosAtributo">
  Este é um segundo paragrafo Este é um paragrafo Este é um paragrafo Este é um paragrafo
</p>

  <div v-for="(todo, index) in todos" :key="todo.id" class="todos-item">
    <!--renderização condicional da imagem-->
    <img v-if="todo.imgSrc" :src="todo.imgSrc" :alt="todo.imgAlt">
    <!--fim da renderização condicional da imagem -->
    {{index}} - {{todo.title}}
  </div>

</template>



<script>


export default {
 name: 'App',
  data(){
    return {
      isHome: true,
      classTitle: 'title',
      classtext: 'text',
      pClass: ['text',' text-home'],
      estilosAtributo: {color: 'aqua', backgroundColor: 'black'},
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
