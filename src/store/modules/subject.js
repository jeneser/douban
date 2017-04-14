import Vue from 'vue'

const state = {
  bannerTitle: '聊聊你的观影感受',
  subject: {},
  classify: '',
  adImgUrl: 'http://img.hb.aicdn.com/f50e8bf408f8e61a9dd1c658fdca088591daeab131f4c-lfGGLz_fw658',
  questions: [
    {
      title: '大家为什么对国产片这么苛刻？',
      comments: '35回答'
    },
    {
      title: '有没有人喜欢凯凯王版的汤川学？',
      comments: '19回答'
    },
    {
      title: '真的有饭店的打包袋长的和优衣库一样吗？',
      comments: '11回答'
    },
    {
      title: '最后结尾 石鸿问“这道题难吗？”，唐川说“很难”，什么意思？  ?',
      comments: '7回答'
    }
  ]
}

const getters = {
  subjectMeta: state => {
    if (state.classify === 'movie') {
      return state.subject.year + '/' +
             state.subject.genres.join(' / ') + ' / ' +
             state.subject.casts.map(item => item.name).join(' / ') + ' / ' +
             state.subject.directors.map(item => item.name).join(' / ') + ' / ' +
             state.subject.countries.join(' / ')
    } else if (state.classify === 'book') {
      return state.subject.author.join(' / ') +
             state.subject.translator.join(' / ') + ' / ' +
             state.subject.publisher + ' / ' +
             state.subject.binding + ' / ' + state.subject.pages + ' / ' +
             state.subject.price + ' / ' + state.subject.pubdate
    }
  },
  summary: state => {
    if (state.subject.summary) {
      return state.subject.summary.slice(0, 120)
    }
  },
  genres: state => {
    if (state.classify === 'book') {
      return state.subject.tags
    } else if (state.classify === 'movie') {
      return state.subject.genres
    }
  }
}

const mutations = {
  getSingleSubject (state, payload) {
    state.classify = payload.classify
    state.subject = payload.res
  }
}

const actions = {
  getSingleSubject ({commit}, payload) {
    switch (payload.classify) {
      case 'movie':
        Vue.http.jsonp('https://api.douban.com/v2/' + payload.classify +
               '/subject/' + payload.id)
                .then(res => {
                  commit({
                    type: 'getSingleSubject',
                    classify: payload.classify,
                    res: res.body
                  })
                })
        break
      case 'book':
        Vue.http.jsonp('https://api.douban.com/v2/' + payload.classify +
               '/' + payload.id)
                .then(res => {
                  commit({
                    type: 'getSingleSubject',
                    classify: payload.classify,
                    res: res.body
                  })
                })
        break
      default:
        console.log('[Error]:Api is error!')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
