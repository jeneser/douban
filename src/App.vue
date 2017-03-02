<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'app',
  components: { HeaderBar }
}
</script>

<style lang="scss">
#app {
  max-width: 568px;
  margin: 0 auto;
}
.has-header {
  margin-top: 48px;
}
ul, li, a {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
