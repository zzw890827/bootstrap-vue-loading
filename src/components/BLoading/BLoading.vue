<template>
  <div class="text-center bg" v-if="isLoad">
    <b-spinner variant="primary" label="loading..." class="spinner mt-3"/>
    <h2>Loading...</h2>
  </div>
</template>

<script>
export default {
  name: "BLoading",
  data() {
    return {
      isLoad: true
    }
  },
  methods: {
    close() {
      this.isLoad = false
    }
  }
}
</script>

<style scoped>
.bg {
  width: 100%;
  height: 100%;
  background: #ffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}

.spinner {
  width: 3rem;
  height: 3rem;
}

</style>
