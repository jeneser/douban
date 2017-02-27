<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书｜虚构类"></scroller>
    <scroller title="最受关注图书｜非虚构类"></scroller>
    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import Scroller from '../components/Scroller.vue'
import Types from '../components/Types.vue'
import DownloadApp from '../components/DownloadApp.vue'

export default {
  name: 'book-view',
  components: { Scroller, Types, DownloadApp },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
