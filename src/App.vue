<template>
  <div id="app">
    <img :src="logoPath" alt="logo">
    <h1>Hello Vue</h1>
  </div>
</template>

<script>

import logo from './assets/logo.png'

export default {
  name: 'app',
  beforeMount() {
    this.loading = this.$loading();
  },
  mounted() {
    setTimeout(() => this.loading.close(), 5000)
  },
  data() {
    return {
      loading: {},
      logoPath: logo,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
