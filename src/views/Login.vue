<template>
  <div class="login-wrapper">
    <form @submit.prevent="login" v-if="!auth" action="#">
      <div class="form-item">
        <label for="email">email</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          :class="{invalid: invalid.email}" 
          placeholder="abc@abc.abc"
          @input="reCheckInput"
        >
      </div>
      <div class="form-item">
        <label for="pass">password</label>
        <input 
          type="password" 
          id="pass" 
          v-model="password"
          :class="{invalid: invalid.password}"
          placeholder="min 6 characters"
          @input="reCheckInput"
        >
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
      password: '',
      invalid: {
        email: false,
        password: false
      },
      tryLogin: false
    }
  },
  computed: {
    auth() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.err;
    }
  },
  methods: {
    validate() {
      this.invalid.email = !!this.email.search(/^[^\s@]+@[^\s]+\.[^\s]+$/i);
      this.invalid.password = this.password.length < 6;
    },
    reCheckInput() {
      if (this.tryLogin) {
        this.validate();
      }
    },
    login() {
      this.tryLogin = true;
      this.validate();
      if (this.invalid.email || this.invalid.password) {
        return;
      }
      this.$store.dispatch('login', {email: this.email, password: this.password})
        .then(() => {
          if (this.$store.getters.user) {
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
        height: 30px;
        border-radius: 3px;
        outline: none;
        border: 1px solid gray;
        padding: 0 5px;

        &:focus {
          border: 2px solid #336acf;
        }

        &.invalid {
          border: 2px solid #cf3d33;
        }
      }

      .invalid {
        border: 2px solid #cf3d33;
      }
    }

    input[type='submit'] {
      @include button(#336acf);
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
