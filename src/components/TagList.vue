<template>
  <div>
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
    data() {
      return {
        tags: [
          'tagA',
          'tagB'
        ]
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
