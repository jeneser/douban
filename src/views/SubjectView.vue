<template>
  <div class="subject-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="subject-card">
      <h1 class="title">{{subject.title}}</h1>
      <div class="subject-info">
        <div class="right">
          <a href="#">
            <img v-if="subject.images" :src="subject.images.large" alt="cover">
          </a>
        </div>
        <div class="left" v-if="subject.rating">
          <rating :rating="subject.rating">
            <span slot="ratingsCount">{{subject.ratings_count}}人评价</span>
          </rating>
          <template v-if="subject.genres">
            <p class="meta">{{movieMeta}}</p>
            <a href="#" class="open-app">用App查看影人资料</a>
          </template>
          <template v-if="subject.author">
            <p class="meta">{{bookMeta}}</p>
            <a href="#" class="buy">在豆瓣购买</a>
          </template>
        </div>
      </div>
      <div v-if="subject.author" class="vendors-link">
        <a class="link">
          在哪儿买这本书？
          <span class="info">
            豆瓣阅读电子书 66.00元起
          </span>
        </a>
      </div>
      <subject-mark></subject-mark>
      <div class="subject-intro">
        <h2>{{subject.title}}的简介</h2>
        <p>
          <template v-if="subject.summary">
            {{isExpand ? summary : subject.summary}}……
          </template>
          <a href="javascript:;" v-show="isExpand" v-on:click="expand">
            (展开)
          </a>
        </p>
      </div>
      <div class="genres">
        <h2>查看更多相关分类</h2>
        <template v-if="genres">
          <tags :items="genres"></tags>
        </template>
      </div>
      <div class="subject-pics">
        <h2>{{subject.title}}的图片</h2>
        <ul v-if="subject.images">
          <li class="pic">
            <a href="#">
              <img :src="subject.images.large" alt="poster">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="subject.images.large" alt="poster">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img :src="subject.images.large" alt="poster">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="subject-comments">
      <h2>{{subject.title}}的短评</h2>
      <div class="content-list">
        <card mold="comment" v-for="item in items" :key="item"></card>
        <a class="list-link" href="javascript:;">显示更多评论</a>
      </div>
    </div>
    <div class="ad">
      <banner isAd="true" :adImg="adImgUrl" noContent></banner>
    </div>
    <div class="subject-question">
      <h2>关于{{subject.title}}的问答</h2>
      <list :items="questions"></list>
      <a class="list-link" href="javascript:;">显示更多问答</a>
    </div>
    <scroller title="推荐的豆列" type="onlyString" :items="tags"></scroller>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Rating from '../components/Rating'
import subjectMark from '../components/SubjectMark'
import Card from '../components/Card'
import List from '../components/List'
import Scroller from '../components/Scroller'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'

export default {
  name: 'subject-view',
  components: { Banner, Rating, subjectMark, Card, List, Scroller, Tags, DownloadApp },
  data () {
    return {
      bannerTitle: '聊聊你的观影感受',
      subject: {},
      isExpand: true,
      items: new Array(5),
      adImgUrl: 'http://img.hb.aicdn.com/c1dd2a72fa6412bd455868be68ca402cf9f94b84e688-WMTPtp_fw658',
      questions: [
        {
          title: '大家为什么对国产片这么苛刻？',
          comments: '35回答'
        },
        {
          title: '有没有人喜欢凯凯王版的汤川学？',
          comments: '19回答'
        },
        {
          title: '真的有饭店的打包袋长的和优衣库一样吗？',
          comments: '11回答'
        },
        {
          title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
          comments: '7回答'
        }
      ],
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
      return this.subject.year + this.subject.genres.join(' / ') +
             this.subject.casts.map(item => item.name).join(' / ') +
             this.subject.directors.map(item => item.name).join(' / ') +
             ' / ' + this.subject.countries.join(' / ')
    },
    bookMeta: function () {
      return this.subject.author.join(' / ') +
             this.subject.translator.join(' / ') + ' / ' +
             this.subject.publisher + ' / ' +
             this.subject.binding + ' / ' + this.subject.pages + ' / ' +
             this.subject.price + ' / ' + this.subject.pubdate
    },
    summary: function () {
      return this.subject.summary.slice(0, 120)
    },
    genres: function () {
      return this.subject.tags ? this.subject.tags : this.subject.genres
    }
  },
  methods: {
    expand: function (event) {
      this.isExpand = false
    }
  },
  created () {
    const id = this.$route.params.id
    const classify = this.$route.params.classify

    switch (classify) {
      case 'movie':
        this.$http.jsonp('https://api.douban.com/v2/' + classify +
               '/subject/' + id)
        .then(res => {
          console.log(res.body)
          this.subject = res.body
        })
        break
      case 'book':
        this.$http.jsonp('https://api.douban.com/v2/' + classify +
               '/' + id)
        .then(res => {
          console.log(res.body)
          this.subject = res.body
        })
        break
      default:
        console.log('[Error]:api is error')
    }
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

    .buy {
      display: inline-block;
      height: 2.4rem;
      padding: 0 0.6rem;
      line-height: 2.4rem;
      text-align: center;
      font-size: 1.3rem;
      color: #E76648;
      border: 0.1rem solid #E76648;
      border-radius: 0.3rem;
    }
  }
}

.vendors-link {
  position: relative;
  margin: 1.5rem 0;
  padding: 1rem 1.8rem 1rem 0;
  line-height: 2.4rem;
  font-size: 1.5rem;
  overflow: auto;
  box-sizing: border-box;

  .link {
    display: inline-block;
    width: 100%;
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    color: #ccc;
    font-size: 1.4rem;
  }

  &::before {
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
  }

  &::after {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #E8E8E8;
    content: '';
    position: absolute;
  }
}

.subject-intro, .genres, .subject-pics, .subject-comments,
.ad, .subject-question {
  margin-bottom: 3rem;
}

h2 {
  margin: 0 0 1.5rem;
  font-size: 1.5rem;
  color: #aaa;
}

.subject-intro {
  p {
    font-size: 1.5rem;
    color: #494949;
  }

  a {
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

.subject-comments h2, .subject-question {
  padding: 0 1.8rem;
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
</style>
