<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for="item in items">
          <a :href="baseUri + item.href">{{item.title}}<span></span></a>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'types',
  data () {
    return {
      baseUri: 'https://m.douban.com/',
      items: [
        {
          title: '经典',
          href: 'movie/classic'
        },
        {
          title: '冷门佳片',
          href: 'movie/underrated'
        },
        {
          title: '豆瓣高分',
          href: 'movie/doubantop'
        },
        {
          title: '动作',
          href: 'movie/action'
        },
        {
          title: '喜剧',
          href: 'movie/comedy'
        },
        {
          title: '爱情',
          href: 'movie/love'
        },
        {
          title: '悬疑',
          href: 'movie/mystery'
        },
        {
          title: '恐怖',
          href: 'movie/horror'
        },
        {
          title: '科幻',
          href: 'movie/scifi'
        },
        {
          title: '治愈',
          href: 'movie/sweet'
        },
        {
          title: '文艺',
          href: 'movie/artfilm'
        },
        {
          title: '成长',
          href: 'movie/youth'
        },
        {
          title: '动画',
          href: 'movie/animation'
        },
        {
          title: '华语',
          href: 'movie/chinese'
        },
        {
          title: '欧美',
          href: 'movie/western'
        },
        {
          title: '韩国',
          href: 'movie/korean'
        },
        {
          title: '日本',
          href: 'movie/japanese'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.types {
  margin-top: 10px;

  h2 {
    height: 26px;
    line-height: 26px;
    padding: 0 16px;
    display: inline-block;
  }
}
.type-list {
  margin: 16px 0 0 16px;
  overflow: hidden;

  li {
    float: left;
    box-sizing: border-box;
    width: 50%;
    padding-right: 18px;
    height: 42px;
    line-height: 42px;
    font-size: 18px;
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;

    a {
      color: #42bd56;
    }
  }
  li:nth-child(2n) {
    padding-left: 18px;
  }
  span {
    color: #ccc;
    float: right;
    font-weight: bold;
    display: inline-block;
    border-right: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    width: 8px;
    height: 8px;
    transform: rotate(-45deg);
    margin-top: 1rem;
  }
}
</style>
