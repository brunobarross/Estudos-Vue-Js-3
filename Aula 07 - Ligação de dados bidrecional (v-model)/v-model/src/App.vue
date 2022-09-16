

<!--V-MODEL : Usado em formulários: serve mudarmos o valor da variavel tanto
  no elemento html (ex: input), quanto  no javascript. chamado de two-way data binding
 -->


<template id="app">


<!-- segunda direção: alterar valor da variavel name pela interface do usuario (input)-->

<div>
  <label for="nome">Nome</label>
  <input 
  v-model="name"
  type="text"
  id="nome"

   >

   {{name}}
</div>
<br><br>

<div>
  <select v-model="sports">
    <option value="">Escolha</option>
    <option value="futebol">Futebol</option>
    <option value="basquete">Basquete</option>
    <option value="volei">Volei</option>

  </select>
  {{sports}}


</div>
<br><br>

<div>
  <label>Newsletter</label>
  <input v-model="newsletter" type="radio" value="Sim">
  <input v-model="newsletter" type="radio" for="" value="Nao">
</div>

{{newsletter}}
<br><br>


<div>
  <label>Contrato</label>
  <input v-model="contrato" type="checkbox" >Aceita nossos termos...
  {{contrato}}

</div>
<br><br>
<div>
  <label>Contrato</label>
  <input v-model="colors" type="checkbox" value="Azul" >Azul
  <input v-model="colors" type="checkbox" value="Preto" >Preto
  <input v-model="colors" type="checkbox" value="Vermelho" >Vermelho
  {{colors}}

</div>
  


</template>



<script>


export default {
 name: 'App',
  data(){
    return {
      //primeira direção: alterar pelo sistema
      name: 'Altamiro',
      sports: '',
      newsletter: 'Nao',
      contrato: false,
      colors: [],

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
