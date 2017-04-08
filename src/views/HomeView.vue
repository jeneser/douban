<template>
  <div class="home-view has-header">
    <sub-nav quickNav="ok"></sub-nav>
    <list :items="events"></list>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>

  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import SubNav from '../components/SubNav'
import List from '../components/List'

export default {
  name: 'home-view',
  components: { SubNav, List, InfiniteLoading },
  data () {
    return {
      events: [],
      temp: []
    }
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.events = this.events.concat(this.temp)
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    loadMore () {
      this.$http.jsonp('https://api.douban.com/v2/event/list?loc=108288&start=5&count=5')
                .then(res => {
                  console.log(res.body.events)
                  this.temp = res.body.events
                })
    }
  },
  beforeMount () {
    this.$http.jsonp('https://api.douban.com/v2/event/list?loc=108288&count=5')
              .then(res => {
                console.log(res.body.events)
                this.events = res.body.events
              })
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}

</style>
