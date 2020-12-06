<template>
  <div class="container">
    <h1>Login</h1>
    <div class="auth-container">
      <form @submit.prevent="submitHandler">
        <input
          :value="email"
          @input="email = $event.target.value"
          autoFocus
          id="mail"
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <input
          v-model="password"
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
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submitHandler() {
        console.log({
          email: this.email,
          password: this.password
        });
      }
    }
  }
</script>

<style scoped>
</style>
