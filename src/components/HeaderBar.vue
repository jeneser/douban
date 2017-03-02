<template>
  <div class="header-bar">
    <h1 class="title">豆瓣</h1>
    <div class="button-container">
      <router-link to="/">
        <button style="color: #2384E8">电影</button>
      </router-link>
      <router-link to="/book">
        <button style="color: #9F7860">图书</button>
      </router-link>
      <router-link to="/status">
        <button style="color: #E4A813">广播</button>
      </router-link>
      <router-link to="/">
        <button style="color: #2AB8CC">小组</button>
      </router-link>
      <button style="color: #42bd56">
        <i class="material-icons">search<i/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  display: flex;
  height: 47px;
  background: #fff;
  border-bottom: 1px solid #f3f3f3;

  .title {
    flex: 1;
    display: inline-block;
    max-width: 46px;
    max-height: 22px;
    margin-right: 18px;
    font-size: 0 !important;
    line-height: 32px;
    color: #00b600;
    word-break: break-all;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;
  }
}
.button-container {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}

.button {
  min-width: 32px;
  margin: 0;
  padding: 0 8px;
}
</style>
