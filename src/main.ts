import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {} from './types'

Vue.filter('trimMessageBody', function (text) {
    return text.slice(0, 40) + '...'
})

Vue.filter('replaceClient', function (text, name) {
    return text.replace(/\$CLIENT/, name)
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
