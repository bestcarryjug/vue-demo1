

import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import login from './login.vue'
import { Header,Swipe,SwipeItem } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './css/index.scss'
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.component('heade', Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



new Vue({
        el:"#app",
        render:c=>c(login),
        router
})