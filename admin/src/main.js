import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import List from './components/List.vue';

Vue.config.productionTip = false

import http from './http';

Vue.prototype.$http = http;
Vue.component('List', List);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
