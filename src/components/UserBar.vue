<template>
  <router-link class="user-bar" :to="{ name: currentLink}" tag="div">
    <div class="avatar">
      <template v-if="currentUser.name">
        <img src="../assets/avatar.png" alt="avatar">
      </template>
      <template v-else>
        <img src="../assets/user_normal.jpg" alt="未登陆">
      </template>
    </div>
    <div class="holder">{{holder}}</div>
    <div class="icon icon-camera"></div>
    <div class="icon icon-pen"></div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-bar',
  data () {
    return {
    }
  },
  computed: {
    currentLink: function () {
      return this.currentUser.name ? 'HomeView' : 'LoginView'
    },
    holder: function () {
      return this.currentUser.name ? this.currentUser.name : '请先登录'
    },
    // Map store/user state
    ...mapGetters(['currentUser'])
  },
  created () {
    // Get local user filling store/user
    if (localStorage.getItem('email')) {
      this.$store.commit({
        type: 'getLocalUser'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-bar {
  position: relative;
  padding: 1rem 1.8rem;
  overflow: hidden;

  .avatar {
    width: 4rem;
    height: 4rem;
    float: left;

    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
    }
  }

  .holder {
    float: left;
    padding-left: 1rem;
    line-height: 4rem;
    font-size: 1.5rem;
    color: #aaa;
  }

  .icon {
    content: '';
    width: 4rem;
    height: 4rem;
    padding: 0.8rem;
    margin-left: 0.8rem;
    float: right;
    box-sizing: border-box;
  }

  .icon::before {
    content: '';
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    background-position: center;
    background-repeat: no-repeat;
  }

  .icon-camera::before {
    background-image: url(../assets/camera.svg);
  }

  .icon-pen::before {
    background-image: url(../assets/pen.svg);
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.1rem;
    background: #E8E8E8;
  }
}
</style>
