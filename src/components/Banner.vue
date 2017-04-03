<template>
  <div class="banner">
    <div class="banner-bg" v-if="!isAd">
      <img src="../assets/promotion_bg.jpg" alt="">
    </div>
    <div class="banner-bg ad" v-if="isAd">
      <img :src="adImg" alt="ad">
    </div>
    <div class="content" v-if="noContent">
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
  props: {
    title: {
      type: String,
      default: '打开App, 回复话题'
    },
    noContent: {
      default: true
    },
    isAd: {
      default: false
    },
    adImg: {
      default: ''
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  height: 8rem;

  img {
    max-width: 100%;
  }
}

.banner-bg {
  position: absolute;
}

.content {
  position: absolute;
  right: 1rem;
  left: 1.8rem;
  display: flex;
  height: 8rem;
  justify-content: space-between;
  align-items: center;

  .title {
    padding-left: 1.8rem;
    font-size: 1.4rem;
    font-weight: normal;
    line-height: 2.2rem;
    color: #2CA532;
  }

  .download, .open {
    display: inline-block;
    width: auto;
    padding: 0 1.4rem;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 2;
    border: 0.1rem solid #42bd56;
    border-radius: 0.3rem;
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
