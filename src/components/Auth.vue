<template>
  <div class="container">
    <h1>{{ register ? 'Cadastrar' : 'Login' }}</h1>
    <div class="auth-container">
      <form @submit.prevent="submitHandler">
        <input
          v-if="register"
          :value="username"
          @input="username = $event.target.value"
          autoFocus
          id="username"
          type="text"
          name="username"
          placeholder="Nome de usuário"
        />
        <input
          :value="email"
          @input="email = $event.target.value"
          :autoFocus="!register"
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
    props: {
      register: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      submitHandler() {
        console.log({
          username: this.username,
          email: this.email,
          password: this.password
        });
      }
    }
  }
</script>

<style scoped>
</style>
