<template>
  <div class="detail-view has-header">
    <banner :title="bannerTitle"></banner>
    <div class="info">
      <h2>
        2017第七届北京国际电影节
        <span class="badge">官方售票</span>
      </h2>
      <div class="poster">
        <img src="https://img3.doubanio.com\/view\/event_poster\/hlarge\/public\/8bba48432726c80.jpg" alt="">
      </div>
      <div class="detail">
        <span class="pl">时间:&nbsp;&nbsp;</span>
        <ul>
          <li class="calendar-str-item">2017-04-08 00:00:00</li>
          <li class="calendar-str-item">2017-04-23 23:30:00</li>
        </ul>
      </div>
      <div class="detail">
        <span class="pl">地点:&nbsp;&nbsp;</span>
        <ul>
          <li class="calendar-str-item">北京 海淀区 全北京30家商业影院、艺术影院和校园影院</li>
        </ul>
      </div>
      <div class="detail">
        <span class="pl">费用:&nbsp;&nbsp;</span>
        <ul>
          <li class="calendar-str-item">免费</li>
        </ul>
      </div>
      <div class="detail">
        <span class="pl">类型:&nbsp;&nbsp;</span>
        <ul>
          <li class="calendar-str-item">影展</li>
        </ul>
      </div>
      <div class="detail">
        <span class="pl">主办方:&nbsp;&nbsp;</span>
        <ul>
          <li class="calendar-str-item">北京国际电影节</li>
        </ul>
      </div>
      <tags noTitle></tags>

      <div class="describe">
        <h2>活动详情</h2>
        <div class="content">
          格热戈日•亚日那，1968年生于波兰西部城市霍茹夫，他是当代波兰最炙手可热的戏剧导演之一。他的作品为波兰戏剧的突破性发展做出了巨大贡献。亚日那毕业于克拉科夫雅盖隆大学哲学院，并在克拉科夫卢德维克•索尔斯基国立戏剧学院学习导演。1998年，他成为华沙多样剧场TR Warszawa（前身是Teatr Rozmaitości）的艺术总监，多样剧场是波兰最具创新性的戏剧团体之一，从2006到2013年亚日那还曾担任还剧院总经理一职。
        </div>
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
      bannerTitle: '每天看点好内容'
    }
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
    font-size: 1.4rem;
  }
}

</style>
