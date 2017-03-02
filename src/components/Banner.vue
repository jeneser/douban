<template>
  <div class="banner">
    <div class="banner-bg">
      <img src="../assets/promotion_bg.jpg" alt="">
    </div>
    <div class="content">
      <span class="title">{{title}}</span>
      <div class="button-wrapper">
        <span class="download">极速下载</span>
        <span class="open">打开</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      title: '打开App, 回复广播'
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 80px;

  img {
    max-width: 100%;
  }
}
.banner-bg {
  position: absolute;
}
.content {
  position: absolute;
  right: 10px;
  left: 18px;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;

  .title {
    padding-left: 18px;
    font-size: 14px;
    font-weight: normal;
    line-height: 22px;
    color: #2CA532;
  }
  .download, .open {
    display: inline-block;
    width: auto;
    padding: 0 14px;
    font-size: 13px;
    font-weight: bold;
    line-height: 2;
    border: 1px solid #42bd56;
    border-radius: 3px;
  }
  .download {
    color: #fff;
    background: #42bd56;
  }
  .open {
    color: #42bd56;
  }

}
</style>
