<template>
  <div class="card">
    <div class="desc">
      <a href="#">
        <img src="../assets/douban-app-logo.png" alt="">
      </a>
      <a href="#">
        <div class="user-info">
          <strong>
            豆瓣<span v-if="mold === 'quote'">写了日记</span>
          </strong>
          <div class="timestamp">2017-03-01 19:30:41</div>
        </div>
      </a>
    </div>
    <div v-if="mold === 'quote'" class="article-card">
      <div class="title">
        豆瓣App 4.12.0 主要更新
      </div>
      <div class="detail">
        - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
      </div>
    </div>
    <p v-if="mold === 'comment'" class="comment">
      可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你
    </p>
    <div class="info">
      <span class="btn like"><i>4</i></span>
      <span v-if="mold === 'quote'" class="btn comment"><i>0</i></span>
      <span v-if="mold === 'quote'" class="btn retweet"><i>1</i></span>
      <span class="btn more"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    mold: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 0 0 2rem 5rem;
  margin: 2rem 1.8rem;
}

.desc {
  margin-left: -5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
}

.user-info {
  display: inline-block;

  strong {
    font-size: 1.7rem;
    line-height: 1;
    color: #494949;

    span {
      color: #aaa;
      font-weight: normal;
    }
  }

  .timestamp {
    font-size: 1.4rem;
    margin-top: 0.6rem;
    line-height: 1;
    color: #aaa;
  }
}

.article-card {
  margin: 1rem 0 2rem 0;
  padding: 1.5rem;
  border-radius: 0.2rem;
  border: solid 0.1rem #d8d8d8;

  .title {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .detail {
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.comment {
  line-height: 2.2rem;
  font-size: 1.5rem;
  color: #494949;
}

.info {
  span {
    margin-right: 2rem;
    font-size: 1.4rem;
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
    margin-bottom: -0.2rem;
  }

  .more {
    float: right;
    margin-right: 0;
  }

  i {
    font-style: normal;
    color: #ccc;
    margin-left: 0.3rem;
    margin-top: -0.3rem;
  }
}

.btn::before {
  content: '';
  width: 2rem;
  height: 2rem;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: -0.4rem;
}

.card::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.1rem;
  background: #E8E8E8;
}
</style>
