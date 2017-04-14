<template>
  <div class="search-view has-header">
    <div class="search">
      <form method="get" action="/search" id="search_form">
        <input type="text" name="query" placeholder="搜索 书 / 影 / 音 / 标签" value="">
        <a class="button-search" href="javascript:void(0);">搜索</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-view',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.search-view {
  .search {
    padding: 0.7rem 2rem;
    border-bottom: 0.1rem solid #F2F2F2;
    overflow: hidden;

    input {
      width: 85%;
      height: 3rem;
      padding: 0.5rem 0.8rem;
      box-sizing: border-box;
      font-size: 1.4rem;
      color: #111;
      background: #f5f5f5;
      border-radius: 0.3rem;
      border: 0;
      outline: 0;
    }

    a {
      display: inline-block;
      float: right;
      width: 10%;
      height: 3rem;
      padding-left: 5%;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #333;
      text-decoration: none;
    }
  }
}
</style>
