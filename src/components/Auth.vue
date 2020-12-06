<template>
  <div class="container">
    <h1 class="center">{{ register ? 'Cadastrar' : 'Login' }}</h1>
    <div class="auth-container">
      <form @submit.prevent="submitHandler">

        <validation-provider
          v-if="register"
          rules="required|max:20"
          v-slot="{ errors }"
        >
          <input
            :value="username"
            @input="username = $event.target.value"
            autoFocus
            id="username"
            type="text"
            name="username"
            placeholder="Nome de usuário"
            class="col"
            :class="errors[0] ? 'invalid' : null"
          />
          <div class="error">{{ errors[0] }}</div>
        </validation-provider>

        <validation-provider
          rules="required"
          v-slot="{ errors }"
        >
          <input
            :value="email"
            @input="email = $event.target.value"
            :autoFocus="!register"
            id="mail"
            type="text"
            name="email"
            placeholder="E-mail"
            class="col"
            :class="errors[0] ? 'invalid' : null"
          />
          <div class="error">{{ errors[0] }}</div>
        </validation-provider>

        <validation-provider
          rules="required|password"
          v-slot="{ errors }"
        >
          <input
            v-model="password"
            id="password"
            type="password"
            name="password"
            placeholder="Senha"
            class="col"
            :class="errors[0] ? 'invalid' : null"
          />
          <div class="error">{{ errors[0] }}</div>
        </validation-provider>

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
  import { ValidationProvider } from 'vee-validate';
  export default {
    components: {
      ValidationProvider
    },
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
  input.invalid {
    border: 1px solid red;
  }
  .error {
    color: red;
  }
  button {
    height: 3em;
    margin: .5em 0 0;
    font-size: 1em;
  }
</style>
