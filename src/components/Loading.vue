<template>
  <div class="loading">
    <img src="../assets/loading_green.gif" alt="loading">
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.loading {
  margin: 2rem;
  text-align: center;

  img {
    width: 4.8rem;
  }
}
</style>
