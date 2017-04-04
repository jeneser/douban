<template>
  <div class="sub-nav">
    <div class="nav-item">
      <a href="#">注册帐号</a><!-- replace blank
      --><a href="#">登录豆瓣</a>
    </div>
    <div class="nav-item">
      <a href="#">使用桌面版</a><!-- replace blank
      --><a href="#">使用豆瓣App</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub-nav',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.sub-nav {
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
</style>
