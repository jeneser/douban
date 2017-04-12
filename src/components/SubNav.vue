<template>
  <div class="sub-nav">
    <div class="navBottom" v-if="navBottom">
      <div class="nav-item">
        <a href="https://accounts.douban.com/register">注册帐号</a><!-- replace blank
        --><a href="https://accounts.douban.com/login">登录豆瓣</a>
      </div>
      <div class="nav-item">
        <a href="https://movie.douban.com/">使用桌面版</a><!-- replace blank
        --><a href="#">使用豆瓣App</a>
      </div>
    </div>

    <div class="quickNav" v-if="quickNav">
      <ul class="quick-nav">
        <li>
          <router-link to="{name: 'MovieView'}">影院热映</router-link>
        </li>
        <li>
          <router-link to="{name: 'MovieView'}">欧美新碟榜</router-link>
        </li>
        <li>
          <router-link to="{name: 'MovieView'}">白先勇细说红楼梦</router-link>
        </li>
        <li>
          <router-link to="#">使用豆瓣App</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub-nav',
  props: ['navBottom', 'quickNav'],
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.navBottom {
  width: 100%;
  border-bottom: 0.1rem solid #f3f3f3;

  .nav-item {
    border-top: 0.1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
  }

  a {
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: #42bd56;

    &:first-child {
      border-right: 0.1rem solid #e5e5e5;
    }
  }
}
.quickNav {
  ul {
    overflow: hidden;
    margin: 2rem 0 0 0;
    padding-top: 0.6rem;

    li {
      float: left;
      width: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      font-size: 1.5rem;
    }

    a {
      display: block;
      max-width: 100%;
      padding: 1.2rem 0;
      line-height: 2rem;
      text-align: center;
      background-color: #f6f6f6;
      color: #494949;
      border-radius: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}

</style>
