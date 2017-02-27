<template>
  <div class="movie-view">
    <scroller title="影院热映"></scroller>
    <scroller title="免费在线观影"></scroller>
    <scroller title="新片速递"></scroller>
    <download-app></download-app>
  </div>
</template>

<script>
import Scroller from '../components/Scroller.vue'
import DownloadApp from '../components/DownloadApp.vue'

export default {
  name: 'movie-view',
  components: { Scroller, DownloadApp },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
