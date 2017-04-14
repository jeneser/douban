<template>
  <div class="group">
    <div class="header">
      <h2>{{title}}</h2>
    </div>
    <ul class="content">
      <li v-for="item in items">
        <a href="#">
          <div class="group-meta">
            <img :src="item.images.small" alt="cover">
            <div class="group-info">
              <span>{{item.title}}</span>
              <rating v-if="item.rating" :rating="item.rating"></rating>
            </div>
            <span v-if="item.group_member" class="group-member">20005人</span>
          </div>
          <div v-if="item.group_topic" class="group-topic">
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
import Rating from '../components/Rating'

export default {
  name: 'group',
  components: { Rating },
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.group {
  margin-left: 1.8rem;
  padding-top: 1.4rem;
}

.content {
  position: relative;

  a {
    display: block;
    padding: 1.5rem 1.8rem 1.5rem 0;
  }

  .group-meta {
    display: flex;
    align-items: center;

    img {
      width: 4rem;
    }
  }

  .group-info {
    flex: 1;
    padding: 0 1rem;
    font-size: 1.8rem;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .group-member {
    color: #ccc;
    font-size: 1.5rem;
  }

  .group-topic {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

li  {
  border-bottom: 1px solid #F2F2F2;
  overflow: hidden;
}
</style>
