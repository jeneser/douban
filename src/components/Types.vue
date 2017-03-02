<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li><a href="/movie/classic">经典<span></span></a></li>
        <li><a href="/movie/underrated">冷门佳片<span></span></a></li>
        <li><a href="/movie/doubantop">豆瓣高分<span></span></a></li>
        <li><a href="/movie/action">动作<span></span></a></li>
        <li><a href="/movie/comedy">喜剧<span></span></a></li>
        <li><a href="/movie/love">爱情<span></span></a></li>
        <li><a href="/movie/mystery">悬疑<span></span></a></li>
        <li><a href="/movie/horror">恐怖<span></span></a></li>
        <li><a href="/movie/scifi">科幻<span></span></a></li>
        <li><a href="/movie/sweet">治愈<span></span></a></li>
        <li><a href="/movie/artfilm">文艺<span></span></a></li>
        <li><a href="/movie/youth">成长<span></span></a></li>
        <li><a href="/movie/animation">动画<span></span></a></li>
        <li><a href="/movie/chinese">华语<span></span></a></li>
        <li><a href="/movie/western">欧美<span></span></a></li>
        <li><a href="/movie/korean">韩国<span></span></a></li>
        <li><a href="/movie/japanese">日本<span></span></a></li>
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
    border-top: solid 1px #eee;
    border-right: solid 1px #eee;
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


li a {
  color: #42bd56;
}


</style>
