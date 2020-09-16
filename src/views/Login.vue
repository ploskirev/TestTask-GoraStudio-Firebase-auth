<template>
  <div class="login-wrapper">
    <form v-if="!auth" action="#">
      <div class="form-item">
        <label for="email">email</label>
        <input type="email" id="email" v-model="email">
      </div>
      <div class="form-item">
        <label for="pass">password</label>
        <input type="password" id="pass" v-model="password">
      </div>
      <input @click.prevent="login" type="submit" value="Login">
      <div class="error-msg">{{error}}</div>
    </form>
    <div v-else class="gif">
      <img src="https://i.gifer.com/ZAc2.gif" alt="funny gif">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    auth() {
      return this.$store.getters.auth;
    },
    error() {
      return this.$store.getters.err;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {email: this.email, password: this.password})
        .then(() => {
          if (this.$store.getters.auth) {
            console.log('true')
            this.email = '';
            this.password = '';
          } 
        });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

.login-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;

  form {
    position: relative;
    width: 100%;

    .form-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      label {
        flex: 1 0 100px;
        text-align: left;
      }

      input {
        flex: 2 0 150px;
      }
    }

    input[type='submit'] {
      @include button(#336acf);
      width: 100%;
      margin-bottom: 20px;
    }

    .error-msg {
      position: absolute;
      color: #cf3d33;
    }
  }
}

.gif {
  margin: 0 auto;
  animation: showHide 14s linear forwards;
}

@keyframes showHide {
  0% {
    opacity: 0;
  }
  1% {
    opacity: .1;
  }
  10% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  99% {
    opacity: .1;
  }
  100% {
    opacity: 0;
  }
}
</style>
