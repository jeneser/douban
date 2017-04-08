<template>
  <div class="subject-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="subject-card">
      <h1 class="title">嫌疑人X的献身</h1>
      <div class="subject-info">
        <div class="right">
          <a href="#">
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp" alt="">
          </a>
        </div>
        <div class="left">
          <p class="rating">
            <span class="rating-stars" data-rating="66.0">
              <span class="rating-star rating-star-medium-full"></span>
              <span class="rating-star rating-star-medium-full"></span>
              <span class="rating-star rating-star-medium-full"></span>
              <span class="rating-star rating-star-medium-half"></span>
              <span class="rating-star rating-star-medium-gray"></span>
            </span>
            <strong>6.6</strong>
            <span>42210人评价</span>
          </p>
          <p class="meta">
            112分钟 / 犯罪 / 悬疑 / 苏有朋(导演) / 王凯 / 张鲁一 / 林心如 / 叶祖新 / 丁冠森 / 邓恩熙 / 成泰燊 / 赵阳 / 侯明昊 / 焉栩嘉 / 2017-03-31(中国大陆) 上映
          </p>
          <a href="#" class="open-app">
            用App查看影人资料
          </a>
        </div>
      </div>
      <div class="subject-mark">
        <a href="javascript:;">想看</a>
        <a href="javascript:;">看过</a>
      </div>
      <div class="subject-intro">
        <h2>嫌疑人X的献身的剧情简介</h2>
        <p>
          在刑警学院任职的物理天才唐川（王凯 饰）与中学教师石泓（张鲁一 饰）年少相识，因彼此对数学的共同兴趣而惺惺相惜，多年后唐川在调查一桩杀人案时， 身为石泓邻居的陈婧（林心如 饰）被列入警方的“嫌疑人”之中，石泓与唐川因此再度重逢，而唐川却在调查中发现了更大的秘密……
          <a class="expand" href="javascript:;">(展开)</a>
        </p>
      </div>
      <tags noTitle="false"></tags>
      <div class="subject-pics">
        <h2>嫌疑人X的献身的预告片(8)和图片(282)</h2>
        <ul>
          <li class="pic">
            <a href="#">
              <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp" alt="">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp" alt="">
            </a>
          </li>
          <li class="pic">
            <a href="#">
              <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2448676053.webp" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="subject-comments">
      <h2>嫌疑人X的献身的短评(27987)</h2>
      <div class="content-list">
        <card v-for="item in items" :key="item"></card>
        <a class="list-link" href="#">显示更多评论</a>
      </div>
    </div>
    <div class="ad">
      <banner isAd="true" :adImg="adImgUrl" noContent></banner>
    </div>
    <div class="subject-question">
      <h2>关于嫌疑人X的献身的问答(28)</h2>
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
import Card from '../components/Card'
import Scroller from '../components/Scroller'
import Tags from '../components/Tags'
import DownloadApp from '../components/DownloadApp'

export default {
  name: 'subject-view',
  components: { Banner, Card, Scroller, Tags, DownloadApp },
  data () {
    return {
      bannerTitle: '聊聊你的观影感受',
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
  }
}
</script>

<style lang="scss" scoped>
.subject-card {
  padding: 0 1.8rem;
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
    height: 10rem;
    font-size: 1.5rem;
    color: #494949;
    overflow: hidden;
  }

  a {
    float: right;
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
