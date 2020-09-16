<template>
  <div class="home-wrapper">
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 20px;

    button {
      @include button(#cf3d33);
    }
  }
</style>
