<template>
  <div class="status has-header">
    <banner></banner>
    <div class="content-list">
      <card v-for="n in 10"></card>
      <a class="list-link" href="#">显示更多广播</a>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Banner from '../components/Banner.vue'
import DownloadApp from '../components/DownloadApp.vue'

export default {
  name: 'status',
  components: { Card, Banner, DownloadApp },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  padding: 15px 0;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #42bd56;
}
</style>
