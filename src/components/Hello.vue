<template>
  <md-toolbar md-theme="white">

    <h2 class="md-title" style="flex: 1">豆瓣</h2>

    <md-button>电影</md-button>
    <md-button>图书</md-button>
    <md-button>广播</md-button>
    <md-button>小组</md-button>

    <md-button>
      <md-icon>search</md-icon>
    </md-button>
  </md-toolbar>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
