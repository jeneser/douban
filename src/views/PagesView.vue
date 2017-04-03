<template>
  <div class="pages-view">
    <header-bar @showSearch="open"></header-bar>
    <router-view></router-view>
    <search-view v-show="search" @closeSearch="close"></search-view>
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
    open: function () {
      this.search = 'open'
    },
    close: function () {
      this.search = ''
    }
  }
}
</script>

<style scoped>

</style>
