<template>
  <div>
    <div class="center bg-green">
      <h1 id="logo">conduit</h1>
      <p id="lead">
        Um lugar para você compartilhar todo o seu conhecimento!
      </p>
    </div>
    <div class="container row sm-vertical">
      <div class="col sm-full">
        <nav>
          <router-link :to="{ name: 'my-feed' }">
            Meu feed
          </router-link>
          <router-link :to="{ name: 'global-feed' }">
            Feed global
          </router-link>
        </nav>
        <main>
          <router-view />
        </main>
      </div>
      <aside
        class="no-flex sm-full"
        style="width: 260px;"
      >
        Tags populares
        <br />
        <TagList />
      </aside>
    </div>
  </div>
</template>

<script>
  import TagList from './TagList';
  export default {
    components: {
      TagList
    }
  }
</script>

<style scoped>
  .bg-green {
    padding: 2em;
    color: white;
    background-color: #5cb85c;
  }
  #logo {
    font-family: 'Courier New', Courier, monospace;
    font-size: 3em;
    text-shadow: 0 1px 3px #0000004d;
  }
  #lead {
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
