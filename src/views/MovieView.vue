<template>
  <div class="movie-view has-header">
    <scroller title="影院热映" type="hasCover" :items="hotMovies"></scroller>
    <scroller title="免费在线观影" type="hasCover" :items="topMovies"></scroller>
    <scroller title="新片速递" type="hasCover" :items="newMovies"></scroller>
    <scroller title="发现好电影" type="onlyString" :items="tags"></scroller>

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
        },
        {
          title: '带你进入不正常的世界',
          href: 'https://m.douban.com/doulist/16002',
          color: '#FF4055'
        },
        {
          title: '用电【影】来祭奠逝去的岁月',
          href: 'https://m.douban.com/doulist/190343',
          color: '#4F9DED'
        },
        {
          title: '女孩们的故事【电影】',
          href: 'https://m.douban.com/doulist/1125971',
          color: '#FFC46C'
        },
        {
          line: true
        },
        {
          title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
          href: 'https://m.douban.com/doulist/4253902',
          color: '#2384E8'
        },
        {
          title: '美国生活面面观',
          href: 'https://m.douban.com/doulist/121326',
          color: '#3BA94D'
        },
        {
          title: '2015终极期待',
          href: 'https://m.douban.com/doulist/37479562',
          color: '#42BD56'
        },
        {
          title: '经典韩国电影——收集100部',
          href: 'https://m.douban.com/doulist/458087',
          color: '#CC3344'
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
