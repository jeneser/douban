<template>
  <div class="group">
    <div class="header">
      <h2>{{title}}</h2>
    </div>
    <ul class="content">
      <li>
        <a href="#">
          <div class="group-meta">
            <img src="https://img3.doubanio.com/icon/g173252-1.jpg" alt="">
            <span class="group-name">浦东租房专区</span>
            <span class="group-member">20005人</span>
          </div>
          <div class="group-topic">
            <span>5分钟前更新：</span>
            <span>浦东 2号线/7号线 次卧  地铁5分钟</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="group-meta">
            <img src="https://img3.doubanio.com/icon/g173252-1.jpg" alt="">
            <span class="group-name">浦东租房专区</span>
            <span class="group-member">20005人</span>
          </div>
          <div class="group-topic">
            <span>5分钟前更新：</span>
            <span>浦东 2号线/7号线 次卧  地铁5分钟</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="group-meta">
            <img src="https://img3.doubanio.com/icon/g173252-1.jpg" alt="">
            <span class="group-name">浦东租房专区</span>
            <span class="group-member">20005人</span>
          </div>
          <div class="group-topic">
            <span>5分钟前更新：</span>
            <span>浦东 2号线/7号线 次卧  地铁5分钟</span>
          </div>
        </a>
      </li>
    </ul>
    <slot name="more"></slot>
  </div>
</template>

<script>
  export default {
    name: 'group',
    props: ['title'],
    data () {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.group {
  margin-left: 18px;
  padding-top: 14px;
}
.content {
  position: relative;

  a {
    display: block;
    padding: 15px 18px 15px 0;
  }
  .group-meta {
    display: flex;
    align-items: center;
  }
  .group-name {
    flex: 1;
    padding: 0 10px;
    font-size: 18px;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .group-member {
    color: #ccc;
    font-size: 15px;
  }
  .group-topic {
    margin-top: 10px;
    font-size: 15px;
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
li::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #E8E8E8;
}
</style>
