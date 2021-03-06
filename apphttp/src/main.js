import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { request } from 'https';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejshttp-7a3ab.firebaseio.com/';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST'){
    request.method = 'PUT';
  }
  next( response => {
    response.json = () => {return {messages: response.body}}
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})
