<template>
  <div class="subject-mark">
    <a href="javascript:;">想看</a>
    <a href="javascript:;">看过</a>
  </div>
</template>

<script>
export default {
  name: 'subjectMark',
  props: [],
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.subject-mark {
  display: flex;
  margin: 3rem 0;

  a {
    display: block;
    height: 3rem;
    margin-right: 1rem;
    line-height: 3rem;
    font-size: 1.5rem;
    text-align: center;
    color: #ffb712;
    border: 0.1rem solid #ffb712;
    border-radius: 0.3rem;
    flex: 1;
  }
}
</style>
