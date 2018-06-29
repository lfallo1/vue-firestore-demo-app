import Vue from 'vue'

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//store / vuex / main app
import router from './router'
import store from './store'
import App from './App.vue'

/* End imports */


//font-awesome config
library.add(faPlus, faHome)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
