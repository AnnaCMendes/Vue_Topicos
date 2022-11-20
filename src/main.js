import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://8080-mineda-projetotopicos-6b573a2xcu3.ws-us72.gitpod.io/'

axios.interceptors.request.use(config => {
  if(store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})
axios.interceptors.response.use(res => {
  return res
}, error => {
  if(error.response.status === 403) {
    alert('Não autorizado!')
  }
  else if (error.response.status === 401) {
    store.commit('logout')
    router.push('/login')
  }
  throw error
})

createApp(App).use(store).use(router).mount('#app')
