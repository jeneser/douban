<template>
  <div class="home-view has-header">
    <sub-nav quickNav="ok"></sub-nav>
    <list></list>

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
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}

</style>
