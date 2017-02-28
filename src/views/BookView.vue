<template>
  <div class="movie-view has-header">
    <scroller title="最受关注图书｜虚构类" type="hasCover" :items="novel"></scroller>
    <scroller title="最受关注图书｜非虚构类" type="hasCover" :items="reality"></scroller>
    <scroller title="豆瓣纸书" type="hasCover" :items="travel">
      <div class="promItem" slot="promItem">
        <img class="corver" src="../assets/s29172888.jpg" alt="">
        <div class="content">
          <span class="price">¥ 68</span>
          <p class="name">造物</p>
          <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title="发现好书" type="onlyString"></scroller>

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
      novel: [],
      reality: [],
      travel: []
    }
  },
  beforeMount () {
    this.$http.jsonp('https://api.douban.com/v2/book/search?q=虚构类&count=8')
              .then(res => {
                this.novel = res.body.books
                console.log(res.body.books)
              })
    this.$http.jsonp('https://api.douban.com/v2/book/search?q=非虚构类&count=8')
              .then(res => {
                this.reality = res.body.books
              })
    this.$http.jsonp('https://api.douban.com/v2/book/search?q=旅行&count=8')
              .then(res => {
                this.travel = res.body.books
              })
  }
}
</script>

<style scoped>
.promItem {
  overflow: hidden;
  margin: 16px 18px 0 16px;
}
.corver {
  float: left;
  width: 100px;
  margin-right: 15px;
}
.content {
  margin-right: 10xp;
}
.name {
  font-size: 20px;
  color: #494949;
  margin: 10px;
  max-width: 100%;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.price {
  float: right;
  color: #E76648;
  font-size: 16px;
  line-height: 22px;
}
.info {
  font-size: 13px;
  font-weight: 300;
  line-height: 1.5;
  color: #9B9B9B;
}
</style>
