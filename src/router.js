/**
 * Created by Administrator on 2018/1/3.
 */



import VueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/Member.vue"
import shop from "./components/tabbar/shoping.vue"
import search from "./components/tabbar/search.vue"

var router = new VueRouter({
    routes:[
        {path:'/',component:home},
        {path:'/home',component:home},
        {path:'/member',component:menber},
        {path:'/shop',component:shop},
        {path:'/search',component:search},
    ],
    linkActiveClass: 'mui-active'
})


export default router