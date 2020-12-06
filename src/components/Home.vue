<template>
  <div>
    <div class="center bg-green">
      <h1 id="logo">conduit</h1>
      <p id="lead">
        Um lugar para você compartilhar todo o seu conhecimento!
      </p>
    </div>
    <div class="container">
      <div>
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
    </div>
  </div>
</template>

<script>
  export default {
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
