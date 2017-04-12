import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieTags: [
      {
        title: '同时入选IMDB250和豆瓣电影250的电影',
        href: 'https://m.douban.com/doulist/968362/',
        color: '#FFAC2D'
      },
      {
        title: '带你进入不正常的世界',
        href: 'https://m.douban.com/doulist/16002',
        color: '#FF4055'
      },
      {
        title: '用电【影】来祭奠逝去的岁月',
        href: 'https://m.douban.com/doulist/190343',
        color: '#4F9DED'
      },
      {
        title: '女孩们的故事【电影】',
        href: 'https://m.douban.com/doulist/1125971',
        color: '#FFC46C'
      },
      {
        line: true
      },
      {
        title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
        href: 'https://m.douban.com/doulist/4253902',
        color: '#2384E8'
      },
      {
        title: '美国生活面面观',
        href: 'https://m.douban.com/doulist/121326',
        color: '#3BA94D'
      },
      {
        title: '2015终极期待',
        href: 'https://m.douban.com/doulist/37479562',
        color: '#42BD56'
      },
      {
        title: '经典韩国电影——收集100部',
        href: 'https://m.douban.com/doulist/458087',
        color: '#CC3344'
      }
    ]
  },
  mutations: {},
  actions: {}
})
