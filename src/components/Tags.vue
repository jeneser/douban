<template>
  <div class="tags">
    <h2 v-if="noTitle">查看更多豆瓣高分电影电视剧</h2>
    <ul>
      <li>
        <a href="#">影展</a>
      </li>
      <li>
        <a href="#">观影</a>
      </li>
      <li>
        <a href="#">奥斯卡</a>
      </li>
      <li>
        <a href="#">戛纳电影节</a>
      </li>
      <li>
        <a href="#">北京电影节</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tags',
  props: ['noTitle'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  h2 {
    margin: 0 0 1.5rem;
    font-size: 1.5rem;
    color: #aaa;
  }

  li {
    display: inline-block;
    margin: 1rem 1rem 0 0;
    font-size: 1.5rem;
  }

  a {
    display: block;
    padding: 0 1.2rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
    border-radius: 2.8rem;
    text-align: center;
    color: #494949;
    background: #f5f5f5;
  }
}
</style>
