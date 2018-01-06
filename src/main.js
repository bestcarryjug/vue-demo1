

import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import login from './login.vue'
import { Header,Swipe,SwipeItem,Button,Lazyload } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './css/index.scss'
import VueResource from 'vue-resource';
import moment from "moment";
import VuePreview from 'vue-preview'
Vue.use(Lazyload);
Vue.use(VueResource);
Vue.use(VuePreview)
Vue.component('heade', Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component("mybutton", Button);
Vue.http.options.root="http://vue.studyit.io"
Vue.http.options.emulateJSON = true;
Vue.filter("forma",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
      return moment(datastr).format(pattern);
})



new Vue({
        el:"#app",
        render:c=>c(login),
        router
})