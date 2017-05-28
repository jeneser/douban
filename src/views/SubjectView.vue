<template>
  <div class="subject-view has-header">
    <banner title="聊聊你的观影感受"></banner>
    <template v-if="!showLoading">
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
            <template v-if="subject.genres && subjectMeta">
              <p class="meta">{{subjectMeta}}</p>
              <a href="#" class="open-app">用App查看影人资料</a>
            </template>
            <template v-if="subject.author && subjectMeta">
              <p class="meta">{{subjectMeta}}</p>
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
        <marking>
          <template slot="book" v-if="subject.author">
            <router-link :to="{ name: 'LoginView'}">想读</router-link>
            <router-link :to="{ name: 'LoginView'}">在读</router-link>
            <router-link :to="{ name: 'LoginView'}">读过</router-link>
          </template>
          <template slot="movie" v-else>
            <router-link :to="{ name: 'LoginView'}">想看</router-link>
            <router-link :to="{ name: 'LoginView'}">看过</router-link>
          </template>
        </marking>
        <div class="subject-intro">
          <h2>{{subject.title}}的简介</h2>
          <p>
            <template v-if="summary && subject.summary">
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
        <banner :adImg="adImgUrl"></banner>
      </div>
      <div class="subject-question">
        <h2>关于{{subject.title}}的问答</h2>
        <list :items="questions"></list>
        <a class="list-link" href="javascript:;">显示更多问答</a>
      </div>
      <scroller title="推荐的豆列" type="onlyString" :items="movieTags"></scroller>
      <download-app></download-app>
    </template>
    <loading v-show="showLoading"></loading>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Banner from '../components/Banner'
import Rating from '../components/Rating'
import Marking from '../components/Marking'
import Card from '../components/Card'
import List from '../components/List'
import Scroller from '../components/Scroller'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'
import Loading from '../components/Loading'

export default {
  name: 'subject-view',
  components: {
    Banner,
    Rating,
    Marking,
    Card,
    List,
    Scroller,
    Tags,
    DownloadApp,
    Loading
  },
  data () {
    return {
      showLoading: true,
      isExpand: true,
      items: new Array(5)
    }
  },
  computed: {
    // Getting Vuex State from store/modules/subject
    ...mapState({
      subject: state => state.subject.subject,
      adImgUrl: state => state.subject.adImgUrl,
      questions: state => state.subject.questions,
      movieTags: state => state.movie.movieTags
    }),
    // Getting Filtered Vuex State
    ...mapGetters({
      subjectMeta: 'subjectMeta',
      summary: 'summary',
      genres: 'genres'
    })
  },
  methods: {
    // Toggle summary
    expand: function (event) {
      this.isExpand = false
    }
  },
  created () {
    // Getting route params
    const id = this.$route.params.id
    const classify = this.$route.params.classify

    // Dispatching getSingleSubject
    this.$store.dispatch({
      type: 'getSingleSubject',
      id: id,
      classify: classify
    }).then(res => {
      // Success handle
      this.showLoading = false
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
