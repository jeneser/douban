<template>
  <div class="download-app">
    <div class="info">
      <img src="../assets/douban-app-logo.png" alt="下载豆瓣">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神角落</div>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS 客户端</a>
  </div>
</template>

<script>
  export default {
    name: 'download-app',
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
.download-app {
  padding: 0 0 20px 0;
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 15px;
}
.info {
  margin: 0 auto 15px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  display: inline-block;
  color: #111;
}
img {
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 12px;
}
.info-content {
  overflow: hidden;
}
strong {
  font-size: 24px;
  font-weight: normal;
  line-height: 28px;
}
.download-app a:last-child {
  display: block;
  color: #42bd56;
  text-decoration: none;
}

</style>
