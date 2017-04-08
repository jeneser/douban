<template>
  <div class="home-view has-header">
    <sub-nav quickNav="ok"></sub-nav>
    <list :items="events"></list>

  </div>
</template>

<script>
import SubNav from '../components/SubNav'
import List from '../components/List'

export default {
  name: 'home-view',
  components: { SubNav, List },
  data () {
    return {
      events: []
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
