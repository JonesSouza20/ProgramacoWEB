<template>
  <div>
    <h1>Lista de Fotos</h1>
    <ul> <!-- Lista para exibição de cada foto. -->
      <li v-for="foto in fotos" :key="foto.id"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fotos: [] // Array para guardar as fotos da API.
    };
  },
  async created() {
    // Faz uma requisição para pegar as fotos da API.
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
      //Verifica se ocorreu tudo bem com a requisição.
      if (!resposta.ok) {
        throw new Error('Não foi possível verificar os dados da API');
      }
      //Armazena as fotos recebidas.
      this.fotos = await resposta.json();
    } catch (erro) {
      // Exibe uma mensagem de erro se algo der errado.
      console.error("Não foi possível verificar os dados da API!", erro);
    }
  }
};
</script>