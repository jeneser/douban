<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString"></scroller>

    <types></types>
    <download-app></download-app>
  </div>
</template>

<script>
import Scroller from '../components/Scroller.vue'
import Types from '../components/Types.vue'
import DownloadApp from '../components/DownloadApp.vue'

// function getMovie () {
//
// }

export default {
  name: 'movie-view',
  components: { Scroller, Types, DownloadApp },
  data () {
    return {
      hotMovies: [],
      newMovies: [],
      topMovies: [],
      tags: [
        {
          title: '同时入选IMDB250和豆瓣电影250的电影',
          href: 'https://m.douban.com/doulist/968362/',
          color: '#FFAC2D'
        }
      ]
    }
  },
  beforeMount () {
    this.$http.jsonp('http://api.douban.com/v2/movie/in_theaters?count=8')
              .then(res => {
                console.log(res.body.subjects)
                this.hotMovies = res.body.subjects
                console.log(this.hotMovies)
              })
    this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=8')
              .then(res => {
                this.newMovies = res.body.subjects
              })
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=8')
              .then(res => {
                this.topMovies = res.body.subjects
              })
  }
}
</script>

<style scoped>

</style>
