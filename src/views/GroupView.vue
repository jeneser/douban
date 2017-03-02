<template>
  <div class="group-view has-header">
    <group title="租房找室友">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
    <group title="租房找室友">
      <a class="list-link" href="#" slot="more">来聊五块钱</a>
    </group>
    <group title="租房找室友">
      <a class="list-link" href="#" slot="more">更多相关小组</a>
    </group>
    <group title="租房找室友">
      <a class="list-link" href="#" slot="more">来聊五块钱</a>
    </group>
    <download-app></download-app>
  </div>
</template>

<script>
import Group from '../components/Group.vue'
import DownloadApp from '../components/DownloadApp.vue'

export default {
  name: 'group-view',
  components: { Group, DownloadApp },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.list-link {
  display: block;
  margin-bottom: 30px;
  padding: 15px 0;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #42bd56;
}
</style>
