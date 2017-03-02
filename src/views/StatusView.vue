<template>
  <div class="status has-header">
    <banner></banner>
    <card></card>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Banner from '../components/Banner.vue'

export default {
  name: 'status',
  components: { Card, Banner },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
