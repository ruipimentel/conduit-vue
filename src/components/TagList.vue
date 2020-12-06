<template>
  <div v-if="!tags">
    Carregando...
  </div>
  <div v-else-if="tags.length === 0">
    Não há tags
  </div>
  <div v-else>
    <a
      v-for="tag in tags"
      :key="tag"
      href="/"
    >
      {{ tag }}
    </a>
  </div>
</template>

<script>
  export default {
    async created() {
      const response = await fetch('https://conduit.productionready.io/api/tags');
      const data = await response.json();
      this.tags = data.tags;
    },
    data() {
      return {
        tags: undefined
      };
    }
  }
</script>

<style scoped>
  a {
    display: inline-block;
    background-color: #818a91;
    color: white;
    padding: .2em .8em;
    white-space: nowrap;
    margin-right: .3em;
    border-radius: 1em;
    font-size: .9em;
  }
</style>
