<template>
  <div class="scroller">
    <div class="header">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <ul>
        <li>
          <a href="#">
            <img src="../assets/p2429713841.jpg" alt="">
            <span class="title">生化危机：终章</span>
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
        <li>
          <a href="#">
            <img src="../assets/p2429713841.jpg" alt="">
            <span class="title">生化危机：终章</span>
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
        <li>
          <a href="#">
            <img src="../assets/p2429713841.jpg" alt="">
            <span class="title">生化危机：终章</span>
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
        <li>
          <a href="#">
            <img src="../assets/p2429713841.jpg" alt="">
            <span class="title">生化危机：终章</span>
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
        <li>
          <a href="#">
            <img src="../assets/p2429713841.jpg" alt="">
            <span class="title">生化危机：终章</span>
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scroller',
    props: ['title'],
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
}
ul {
  margin: 0;
  padding: 8px 0;
  overflow-x: auto;
  white-space: nowrap;
  text-align: center;
}
li {
  display: inline-block;
  width: 100px;
  padding: 0;
  margin-left: 8px;
  list-style: none;
}
li:first-child {
  padding-left: 8px;
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
</style>
