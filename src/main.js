

import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import login from './login.vue'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.component('heade',Header)


new Vue({
        el:"#app",
        render:c=>c(login),
        router
})