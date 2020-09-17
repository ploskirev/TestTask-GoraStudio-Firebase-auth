<template>
  <div class="home-wrapper">
    <h1>{{user}}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'Home',
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_mixins.scss';

.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 360px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    margin-bottom: 40px;
    font-size: 28px;
    font-weight: 700;
  }

  button {
    @include button(#cf3d33);
  }
}
</style>
