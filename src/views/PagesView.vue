<template>
  <div class="pages-view">
    <header-bar v-on:showSearch="show"></header-bar>
    <router-view></router-view>
    <search-view v-show="search"></search-view>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue'
import SearchView from '../views/SearchView.vue'

export default {
  name: 'pages-view',
  components: { HeaderBar, SearchView },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    show: function () {
      this.search = 'search'
      console.log(1)
    }
  }
}
</script>

<style scoped>

</style>
