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

<style>
.has-header {
  margin-top: 64px;
}
</style>
