<template>
  <div class="list">
    <a class="item" href="/pages/detail/123">
      <div class="content">
        <img src="https://qnmob2.doubanio.com/img/files/file-1491015332.jpg?imageView2/2/q/80/w/330/h/330/format/jpg" alt="">
        <h3>当我读天书时，我想些什么</h3>
        <p>这本书一翻开，立刻被消毒了，它是文学界的84消毒液。</p>
      </div>
      <div class="author">
        by<span class="name">耳东某</span>
        <span class="label">来自栏目 广播精选</span>
      </div>
    </a>
    <a class="item" href="#">
      <div class="content">
        <img src="https://qnmob2.doubanio.com/img/files/file-1491015332.jpg?imageView2/2/q/80/w/330/h/330/format/jpg" alt="">
        <h3>当我读天书时，我想些什么</h3>
        <p>这本书一翻开，立刻被消毒了，它是文学界的84消毒液。</p>
      </div>
      <div class="author">
        by<span class="name">耳东某</span>
        <span class="label">来自栏目 广播精选</span>
      </div>
    </a>
    <a class="item" href="#">
      <div class="content">
        <img src="https://qnmob2.doubanio.com/img/files/file-1491015332.jpg?imageView2/2/q/80/w/330/h/330/format/jpg" alt="">
        <h3>当我读天书时，我想些什么</h3>
        <p>这本书一翻开，立刻被消毒了，它是文学界的84消毒液。</p>
      </div>
      <div class="author">
        by<span class="name">耳东某</span>
        <span class="label">来自栏目 广播精选</span>
      </div>
    </a>
    <a class="item" href="#">
      <div class="content">
        <img src="https://qnmob2.doubanio.com/img/files/file-1491015332.jpg?imageView2/2/q/80/w/330/h/330/format/jpg" alt="">
        <h3>当我读天书时，我想些什么</h3>
        <p>这本书一翻开，立刻被消毒了，它是文学界的84消毒液。</p>
      </div>
      <div class="author">
        by<span class="name">耳东某</span>
        <span class="label">来自栏目 广播精选</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    }
  }
}
</script>

<style lang='scss' scoped>
.list {
  .item {
    position: relative;
    display: block;
    padding: 2.5rem 1.8rem 2.5rem 0;
    margin-left: 1.8rem;

    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }

    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
      overflow: hidden;
    }

    img {
      float: right;
      width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
    }

    .author {
      font-size: 1.2rem;
      color: #ccc;
    }

    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }
  }

  .item ~ .item::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
    content: '';
    background: #e3e3e3;
  }
}
</style>
