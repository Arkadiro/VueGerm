import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejshttp-7a3ab.firebaseio.com';
// axios.defaults.headers.common['Authorization'] = 'jkhdskjhd';
axios.defaults.headers.get['Accepts'] = 'application/json';

//intercetor for req
const reqIntercetor = axios.interceptors.request.use(config =>{
  console.log(config);
  return config
})

//intercetor for res
const resIntercetor = axios.interceptors.response.use(res =>{
  console.log(res);
  return res
})

// remove intercetors
axios.interceptors.request.eject(reqIntercetor);
axios.interceptors.response.eject(resIntercetor);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
