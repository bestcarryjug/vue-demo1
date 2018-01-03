

import Vue from 'vue'
import login from './login.vue'
import { Header } from 'mint-ui';
import './lib/mui/css/mui.css'

Vue.component('heade',Header)


new Vue({
        el:"#app",
        render:c=>c(login)
})