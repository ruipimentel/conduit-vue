<template>
  <nav>
    <div class="container">
      <router-link
        to="/home"
        id="logo"
      >
        conduit
      </router-link>
      <div class="float-right">
        <router-link
          to="/home"
          class="menu"
        >
          Home
        </router-link>
        <router-link
          to="/login"
          class="menu"
        >
          Login
        </router-link>
        <router-link
          to="/register"
          class="menu"
        >
          Cadastrar
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  nav {
    margin: 10px;
  }
  #logo {
    font-size: 1.25em;
    color: #66bc66;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
  }
  .menu {
    color: #0000004d;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 0.5em;
    padding: 0.5em;
    padding-right: 0;
    font-size: 0.9em;
  }
  .menu.active {
    color: #000000cc;
  }
  .float-right {
    float: right;
  }
</style>
