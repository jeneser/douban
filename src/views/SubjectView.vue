<template>
  <div class="subject-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="subject-card">
      <h1 class="title">{{subject.title}}</h1>
      <div class="subject-info">
        <div class="right">
          <a href="#">
            <img :src="subject.images | isImg" alt="cover">
          </a>
        </div>
        <div class="left">
          <rating :average="subject.rating | isExist" :ratingsCount="subject.ratings_count"></rating>
          <p class="meta">{{movieMeta}}</p>
          <a href="#" class="open-app">用App查看影人资料</a>
        </div>
      </div>
      <div class="subject-mark">
        <a href="javascript:;">想看</a>
        <a href="javascript:;">看过</a>
      </div>
      <div class="subject-intro">
        <h2>{{subject.title}}的剧情简介</h2>
        <p>
          {{isExpand ? summary : subject.summary}}……
          <a href="javascript:;" v-show="isExpand" v-on:click="expand">
            (展开)
          </a>
        </p>
      </div>
      <tags noTitle="false"></tags>
      <div class="subject-pics">
        <h2>{{subject.title}}的图片</h2>
        <ul>
          <li class="pic">
            <a href="#">
              <img :src="subject.images | isImg" alt="poster">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="subject.images | isImg" alt="poster">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="subject.images | isImg" alt="poster">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="subject-comments">
      <h2>{{subject.title}}的短评</h2>
      <div class="content-list">
        <card v-for="item in items" :key="item"></card>
        <a class="list-link" href="#">显示更多评论</a>
      </div>
    </div>
    <div class="ad">
      <banner isAd="true" :adImg="adImgUrl" noContent></banner>
    </div>
    <div class="subject-question">
      <h2>关于{{subject.title}}的问答(28)</h2>
      <ul class="list">
        <li><a href="#">
          <h3>大家为什么对国产片这么苛刻？</h3>
          <div class="info">35回答</div>
        </a></li>
        <li><a href="#">
          <h3>有没有人喜欢凯凯王版的汤川学？</h3>
          <div class="info">19回答</div>
        </a></li>
        <li><a href="#">
          <h3>真的有饭店的打包袋长的和优衣库一样吗？</h3>
          <div class="info">11回答</div>
        </a></li>
        <li><a href="#">
          <h3>最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?</h3>
          <div class="info">7回答</div>
        </a></li>
        <li><a href="#">
          <h3>我就想问真一叔演谁？</h3>
          <div class="info">9回答</div>
        </a></li>
        <a class="list-link" href="#">查看全部问答</a>
      </ul>
    </div>
    <scroller title="推荐的豆列" type="onlyString" :items="tags"></scroller>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Rating from '../components/Rating'
import Card from '../components/Card'
import Scroller from '../components/Scroller'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'

export default {
  name: 'subject-view',
  components: { Banner, Rating, Card, Scroller, Tags, DownloadApp },
  data () {
    return {
      bannerTitle: '聊聊你的观影感受',
      subject: {},
      isExpand: true,
      items: new Array(5),
      adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
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
          line: true
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
        }
      ]
    }
  },
  computed: {
    movieMeta: function () {
      if (!this.subject.genres) return ''
      return this.subject.year + this.subject.genres.join(' / ') +
             this.subject.casts.map(item => item.name).join(' / ') +
             this.subject.directors.map(item => item.name).join(' / ') +
             ' / ' + this.subject.countries.join(' / ')
    },
    summary: function () {
      if (!this.subject.summary) return ''
      return this.subject.summary.slice(0, 120)
    }
  },
  methods: {
    expand: function (event) {
      this.isExpand = false
    }
  },
  filters: {
    isImg: function (value) {
      if (!value) return ''
      return value.large
    },
    isExist: function (value) {
      if (!value) return ''
      return value.average
    }
  },
  beforeMount () {
    const id = this.$route.params.id
    const classify = this.$route.params.classify
    this.$http.jsonp('https://api.douban.com/v2/' + classify +
                     '/subject/' + id)
              .then(res => {
                console.log(res.body)
                this.subject = res.body
              })
  }
}
</script>

<style lang="scss" scoped>
.subject-card {
  padding: 0 1.8rem;

  h1 {
    margin: 2rem 0 0;
  }
}

.subject-info {
  overflow: hidden;
  margin-bottom: 3rem;

  .right {
    float: right;

    img {
      display: block;
      width: 100%;
      max-width: 10rem;
    }
  }

  .left {
    margin-right: 10rem;

    .meta {
      margin-top: 1.5rem;
      padding-right: 2.4rem;
      line-height: 1.6;
      font-size: 1.4rem;
      color: #494949;
    }

    .open-app {
      display: block;
      margin-top: 1rem;
      line-height: 1;
      font-size: 1.4rem;
      color: #42bd56;
    }
  }
}

.subject-mark {
  display: flex;
  margin-bottom: 3rem;

  a {
    display: block;
    height: 3rem;
    margin-right: 1rem;
    line-height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    color: #ffb712;
    border: 0.1rem solid #ffb712;
    border-radius: 0.3rem;
    flex: 1;
  }
}

.subject-intro, .tags, .subject-pics, .subject-comments,
.ad, .subject-question {
  margin-bottom: 3rem;

  h2 {
    margin: 0 0 1.5rem;
    font-size: 1.5rem;
    color: #aaa;
  }
}

.subject-intro {
  p {
    // height: 10rem;
    font-size: 1.5rem;
    color: #494949;
    // overflow: hidden;
  }

  a {
    // float: right;
    color: #42bd56;
  }
}

.subject-pics {
  ul {
    margin-right: -1.8rem;
    overflow-x: auto;
    white-space: nowrap;
  }

  li {
    height: 12rem;
    overflow: hidden;
    display: inline-block;
  }

  img {
    width: 18rem;
  }
}

.subject-comments h2, .subject-comments .list-link, .subject-question {
  margin: 0 1.8rem;
}

.subject-comments, .subject-question {
  .list-link {
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
  }
}

.ad {
  margin: 3rem 1.8rem;
  margin-top: -2rem;
}

.subject-question {
  h3 {
    padding: 0;
    line-height: 1.41;
    font-size: 1.7rem;
    font-weight: 500;
    color: #494949;
  }

  .info {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #42bd56;
  }
}

</style>
