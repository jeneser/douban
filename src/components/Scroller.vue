<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <ul class="hasCover" v-if="type === 'hasCover'">
        <li v-for="item in items">
          <a href="#">
            <img :src="item.images.large" alt="">
            <span class="title">{{item.title}}</span>
            <div class="rank">
              <span class="star-full"></span>
              <span class="star-full"></span>
              <span class="star-full"></span>
              <span class="star-gray"></span>
              <span class="star-gray"></span>
              <span>6.9</span>
            </div>
          </a>
        </li>
      </ul>
      <ul class="onlyString" v-if="type === 'onlyString'">
        <li style="border-color: #FFAC2D;">
          <a href="https://m.douban.com/doulist/968362/" style="color: #FFAC2D;">同时入选IMDB250和豆瓣电影250的电影</a>
        </li>
        <li style="border-color: #FF4055;">
          <a href="https://m.douban.com/doulist/16002/" style="color: #FF4055;">带你进入不正常的世界</a>
        </li>
        <li style="border-color: #4F9DED;">
          <a href="https://m.douban.com/doulist/190343/" style="color: #4F9DED;">用电【影】来祭奠逝去的岁月</a>
        </li>
        <li style="border-color: #FFC46C;">
          <a href="https://m.douban.com/doulist/1125971/" style="color: #FFC46C;">女孩们的故事【电影】</a>
        </li>
          <li class="line"></li>
        <li style="border-color: #2384E8;">
          <a href="https://m.douban.com/doulist/4253902/" style="color: #2384E8;">科幻是未来的钥匙——科幻启示录【科幻题材】</a>
        </li>
        <li style="border-color: #3BA94D;">
          <a href="https://m.douban.com/doulist/121326/" style="color: #3BA94D;">美国生活面面观</a>
        </li>
        <li style="border-color: #42BD56;">
          <a href="https://m.douban.com/doulist/37479562/" style="color: #42BD56;">2015终极期待</a>
        </li>
        <li style="border-color: #CC3344;">
          <a href="https://m.douban.com/doulist/458087/" style="color: #CC3344;">经典韩国电影——收集100部</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scroller',
    props: ['title', 'type', 'items'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.scroller {
  padding-top: 10px;
}
.header {
  height: 26px;
  line-height: 26px;
  padding: 0 16px;

  a {
    float: right;
    &:last-child {
      color: #42bd56;
    }
  }

  h2 {
    display: inline-block;
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    color: #111;
  }
}
.content {
  box-sizing: content-box;
}
ul {
  margin: 0;
  padding: 8px 0;
}
li {
  list-style: none;
  padding: 0;
}

.hasCover {
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
  .title {
    display: block;
    max-width: 100%;
    margin-top: 10px;
    line-height: 16px;
    color: #111;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  li {
    display: inline-block;
    width: 100px;
    margin-left: 8px;
  }
  li:first-child {
    padding-left: 8px;
  }
  img {
    height: 150px;
  }
  .rank {
    margin-top: 4px;
  }
  .star-full {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
    background-size: 10px 10px;
  }
  .star-gray {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
    background-size: 10px 10px;
  }
  .rank span:last-child {
    color: #aaa;
  }
}
.onlyString {
  overflow-x: auto;
  white-space: nowrap;
  li {
    display: inline-block;
    margin: 0 0 8px 16px;
    font-size: 16px;
    border: solid 1px;
    border-radius: 4px;
    vertical-align: middle;
  }
  a {
    height: 50px;
    line-height: 50px;
    padding: 0 24px;
    letter-spacing: 1.6px;
    overflow: auto;
    display: block;
    text-align: center;
  }
  .line {
    width: 100%;
    display: block;
    height: 1px;
    border: 0;
    margin: 0;
  }
}

</style>
