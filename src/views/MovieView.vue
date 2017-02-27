<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover"></scroller>
    <scroller title="免费在线观影" type="hasCover"></scroller>
    <scroller title="新片速递" type="hasCover"></scroller>
    <scroller title="发现好电影" type="onlyString"></scroller>

    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import Scroller from '../components/Scroller.vue'
import Types from '../components/Types.vue'
import DownloadApp from '../components/DownloadApp.vue'

export default {
  name: 'movie-view',
  components: { Scroller, Types, DownloadApp },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
