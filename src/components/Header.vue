<template>
  <nav>
    <div class="container">
      <a
        href="/"
        id="logo"
      >
        conduit
      </a>
      <div class="float-right">
        <a
          href="/"
          class="menu"
        >
          Home
        </a>
        <a
          href="/login"
          class="menu"
        >
          Login
        </a>
        <a
          href="/register"
          class="menu"
        >
          Cadastrar
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  #logo {
    font-size: 1.25em;
    color: #66bc66;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .menu {
    color: #0000004d;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 1em;
    font-size: 0.9em;
  }
  .float-right {
    float: right;
  }
</style>
