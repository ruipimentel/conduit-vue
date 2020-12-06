<template>
  <div class="container">
    <h1 class="center">{{ register ? 'Cadastrar' : 'Login' }}</h1>
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
          class="col"
        />
        <input
          :value="email"
          @input="email = $event.target.value"
          :autoFocus="!register"
          id="mail"
          type="text"
          name="email"
          placeholder="E-mail"
          class="col"
        />
        <input
          v-model="password"
          id="password"
          type="password"
          name="password"
          placeholder="Senha"
          class="col"
        />
        <div class="right">
          <button
            type="submit"
            class="btn-primary"
          >
            Enviar
          </button>
        </div>
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
        if (this.register) {
          this.$emit('registerSubmit', {
            username: this.username,
            email: this.email,
            password: this.password
          });
        } else {
          this.$emit('loginSubmit', {
            email: this.email,
            password: this.password
          });
        }
      }
    }
  }
</script>

<style scoped>
  .auth-container {
    max-width: 600px;
    margin-left: inherit;
    margin-right: inherit;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 3em;
    margin: .5em 0 0;
    font-size: 1em;
  }
  button {
    height: 3em;
    margin: .5em 0 0;
    font-size: 1em;
  }
</style>
