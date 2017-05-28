<template>
  <div class="search-view has-header">
    <div class="search">
      <form id="search_form" onsubmit="return false">
        <input
          type="text"
          name="query"
          v-model.trim.lazy="queryStr"
          placeholder="搜索 书 / 影 / 音 / 标签">
        <a href="javascript:void(0);" @click="query()">搜索</a>
      </form>
    </div>
    <div v-if="queryStr" class="search-res">
      <group title="影视" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多影视结果</a>
      </group>
      <group title="图书" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多图书结果</a>
      </group>
      <group title="音乐" :items="queryRes_movie">
        <a class="list-link" href="#" slot="more">查看更多音乐结果</a>
      </group>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Group from '../components/Group'

export default {
  name: 'search-view',
  components: { Group },
  data () {
    return {
      queryStr: ''
    }
  },
  computed: {
    // Getting Vuex State from store/modules/search
    ...mapState({
      queryRes_movie: state => state.search.queryRes_movie
      // API rate limit exceeded
      // queryRes_book: state => state.search.queryRes_book,
      // queryRes_music: state => state.search.queryRes_music
    })
  },
  methods: {
    query: function () {
      if (this.queryStr) {
        // Dispatching query
        this.$store.dispatch({
          type: 'query',
          queryStr: this.queryStr
        })
      }
    }
  },
  created: function () {
    const q = this.$route.params.q
    if (q) {
      // console.log(q)
      this.queryStr = q
      this.query()
    }
  }
}
</script>

<style lang="scss" scoped>
.search-view {
  .search {
    padding: 0.7rem 2rem;
    border-bottom: 0.1rem solid #F2F2F2;
    overflow: hidden;

    input {
      width: 85%;
      height: 3rem;
      padding: 0.5rem 0.8rem;
      box-sizing: border-box;
      font-size: 1.4rem;
      color: #111;
      background: #f5f5f5;
      border-radius: 0.3rem;
      border: 0;
      outline: 0;
    }

    a {
      display: inline-block;
      float: right;
      width: 10%;
      height: 3rem;
      padding-left: 5%;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #333;
      text-decoration: none;
    }
  }

  .list-link {
    display: block;
    margin-bottom: 1.5rem;
    padding: 1.5rem 0 1.5rem 5rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: #42bd56;
  }
}
</style>
