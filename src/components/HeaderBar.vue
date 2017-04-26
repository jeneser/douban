<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link :to="{ name: 'HomeView'}">
        豆瓣
      </router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'MovieView'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'BookView'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'StatusView'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'GroupView'}">
          小组
        </router-link>
      </li>
    </ul>
    <span class="talion" @click="showTalion"></span>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {}
  },
  methods: {
    showTalion: function () {
      this.$emit('showTalion')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-bar {
  .title {
    flex: 1;
    max-width: 4.6rem;
    max-height: 2.2rem;
    margin-right: 1.8rem;
    font-size: 0;
    line-height: 3.2rem;
    color: #00b600;
    word-break: break-all;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;

    a {
      display: block;
    }
  }

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  li {
    display: inline-block;
    font-size: 1.6rem;
    margin-right: 1.2rem;
  }

  .talion {
    font-size: 0;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;
    width: 2.4rem;
    height: 1.8rem;
    margin-top: 0.4rem;
  }
}
</style>
