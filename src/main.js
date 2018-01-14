import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import axios from 'axios'
import router from './router'
import 'element-ui/lib/theme-chalk/display.css';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(router)
Vue.use(ElementUI)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBkHtt2LTh6qw5ELIjh500fdRDV55KSlLo',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})

new Vue({
  el: '#app',
  router,
  template : `<App/>`,
  components : {App}
})
