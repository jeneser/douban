<template>
  <div class="detail-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="info">
      <h2>
        {{item.title}}
        <span class="badge">{{item.loc_name}}</span>
      </h2>
      <div class="poster">
        <img :src="item.image_hlarge" alt="">
      </div>
      <div class="detail">
        <span>时间:&nbsp;&nbsp;</span>
        <ul>
          <li>{{item.begin_time}}</li>
          <li>{{item.end_time}}</li>
        </ul>
      </div>
      <div class="detail">
        <span>地点:&nbsp;&nbsp;</span>
        <ul>
          <li>{{item.address}}</li>
        </ul>
      </div>
      <div class="detail">
        <span>费用:&nbsp;&nbsp;</span>
        <ul>
          <li>{{item.fee_str}}</li>
        </ul>
      </div>
      <div class="detail">
        <span>类型:&nbsp;&nbsp;</span>
        <ul>
          <li>{{item.category_name}}</li>
        </ul>
      </div>
      <div class="detail">
        <span>起始时间:&nbsp;&nbsp;</span>
        <ul>
          <li v-if="item.owner">{{item.owner.name}}</li>
        </ul>
      </div>
      <tags v-if="item.tags" :items="item.tags | toArray"></tags>
      <div class="describe">
        <h2>活动详情</h2>
        <div v-if="item.content" class="content" v-html="content"></div>
      </div>
    </div>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp.vue'

export default {
  name: 'detail-view',
  components: { Banner, Tags, DownloadApp },
  data () {
    return {
      bannerTitle: '每天看点好内容',
      item: {}
    }
  },
  filters: {
    toArray (value) {
      return value.split(',')
    }
  },
  computed: {
    content: function () {
      // Careful XSS
      // Remove copyright imgs
      return this.item.content.replace(/<img.+?>/ig, '')
    }
  },
  beforeMount () {
    const id = this.$route.params.id
    this.$http.jsonp('https://api.douban.com/v2/event/' + id)
              .then(res => {
                console.log(res.body)
                this.item = res.body
              })
  }
}
</script>

<style lang="scss" scoped>
.info {
  margin: 1rem;

  h2 {
    margin: 2rem 0;
    font-weight: bold;
    color: #494949;
  }

  .badge {
    display: inline-block;
    padding: 0.1rem 0.5rem;
    margin-bottom: 0.3rem;
    vertical-align: middle;
    line-height: 1.8rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #FF8263;
    border-radius: 0.2rem;
  }

  .poster {
    margin: 2rem auto;
    text-align: center;

    img {
      width: 100%;
      max-width: 22rem;
      height: auto;
    }
  }
}

.detail {
  margin-left: 3.3rem;
  margin-bottom: 1rem;
  min-height: 1.5em;
  font-size: 1.4rem;
  clear: left;

  span {
    float: left;
    margin-left: -3.3rem;
    line-height: 150%;
    color: #666666;
  }

  ul {
    list-style-position: outside;
    margin-left: 0;
  }
}

.describe {
  h2 {
    color: #072;
  }

  .content {
    overflow: hidden;
    font-size: 1.4rem;
  }
}

</style>
