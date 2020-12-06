<template>
  <div class="container">
    <h1>Login</h1>
    <div class="auth-container">
      <form @submit.prevent="submitHandler">
        <input
          autoFocus
          id="mail"
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Senha"
        />
        <button
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      submitHandler() {
        console.log('Submeteu!');
      }
    }
  }
</script>

<style scoped>
</style>
