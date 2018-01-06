/**
 * Created by Administrator on 2018/1/3.
 */



import VueRouter from "vue-router"
import home from "./components/tabbar/home.vue"
import menber from "./components/tabbar/Member.vue"
import shop from "./components/tabbar/shoping.vue"
import search from "./components/tabbar/search.vue"
import newline from './components/news/newline.vue'
import newcontent from './components/news/newcontent.vue'
import photo from './components/photo/photo.vue'
import photoinfo from './components/photo/photoinfo.vue'
import shops from './components/shop/shops.vue'
import picture from './components/shop/picture.vue'
import tuwen from './components/photo/tuwen.vue'
import pinl from './components/photo/pinl.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redriect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:menber},
        {path:'/shop',component:shop},
        {path:'/search',component:search},
        {path:'/home/newline',component:newline},
        {path:'/home/newline/:id',component:newcontent},
        {path:'/home/photo',component:photo},
        {path:'/home/photoinfo/:id',component:photoinfo},
        {path:'/home/shops',component:shops},
        {path:'/home/shops/picture/:id',component:picture,name:"pic"},
        {path:'/home/tuwen/:id',component:tuwen,name:"tuwen"},
        {path:'/home/pinl/:id',component:pinl,name:"pinl"},

    ],
    linkActiveClass: 'mui-active'
})


export default router