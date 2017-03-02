<template>
  <div class="card">
    <div class="desc">
      <a href="#">
        <img src="../assets/douban-app-logo.png" alt="">
      </a>
      <a href="#">
        <div class="user-info">
          <strong>豆瓣<span>写了日记</span></strong>
          <div class="timestamp">2017-03-01 19:30:41</div>
        </div>
      </a>
    </div>
    <div class="article-card">
      <div class="title">
        豆瓣App 4.12.0 主要更新
      </div>
      <div class="detail">
        - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
      </div>
    </div>
    <div class="info">
      <span class="btn like"><i>4</i></span>
      <span class="btn comment"><i>0</i></span>
      <span class="btn retweet"><i>1</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 0 0 20px 50px;
  margin: 20px 18px;
}
.desc {
  margin-left: -50px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
  }
}
.user-info {
  display: inline-block;

  strong {
    font-size: 17px;
    line-height: 1;
    color: #494949;
    span {
      color: #aaa;
      font-weight: normal;
    }
  }
  .timestamp {
    font-size: 14px;
    margin-top: 6px;
    line-height: 1;
    color: #aaa;
  }
}
.article-card {
  margin: 10px 0 20px 0;
  padding: 15px;
  border-radius: 2px;
  border: solid 1px #d8d8d8;

  .title {
    font-size: 17px;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .detail {
    font-size: 12px;
    line-height: 16px;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.info {
  span {
    margin-right: 20px;
    font-size: 14px;
  }
  .like::before {
    background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
  }
  .comment::before {
    background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
  }
  .retweet::before {
    background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
  }
  .more::before {
    background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: -2px;
  }
  .more {
    float: right;
    margin-right: 0;
  }
  i {
    font-style: normal;
    color: #ccc;
    margin-left: 3px;
    margin-top: -3px;
  }
}
.btn::before {
  content: '';
  width: 20px;
  height: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: -4px;
}
.card::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #E8E8E8;
}
</style>
