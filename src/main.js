

import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
import router from "./router.js"
import login from './login.vue'
import { Header,Swipe,SwipeItem,Button,Lazyload,Switch } from 'mint-ui';
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './css/index.scss'
import VueResource from 'vue-resource';
import moment from "moment";
import VuePreview from 'vue-preview'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(Lazyload);
Vue.use(VueResource);
Vue.use(VuePreview)
Vue.component('heade', Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component("mybutton", Button);
Vue.component("myswitch", Switch);
Vue.http.options.root="http://vue.studyit.io"
Vue.http.options.emulateJSON = true;
Vue.filter("forma",function(datastr,pattern="YYYY-MM-DD HH:mm:ss"){
      return moment(datastr).format(pattern);
})
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
        state:{
            car:car
        },
        mutations:{
            addcar:function(state,info){
                  var flag = false;
                  state.car.some(function(item){
                    if(item.id == info.id) {
                        item.count += parseInt(info.count);
                        flag = true;
                        return true;
                    }
                  })
                if(!flag){
                    state.car.push(info);
                }
                localStorage.setItem("car",JSON.stringify(state.car));
            },
            shopadd:function(state,info){
                state.car.forEach(function(item){
                        if(item.id == info.id){
                            item.count = parseInt(info.count);
                        }
                });
                localStorage.setItem("car",JSON.stringify(state.car));
            },
            remove:function(state,id){
                    state.car.forEach(function(item,i){
                        if(item.id == id){
                            state.car.splice(i,1)
                        }
                    })
                localStorage.setItem("car",JSON.stringify(state.car));
            },
            change:function(state,info){
                state.car.forEach(function(item){
                    if(item.id == info.id){
                        item.selector = info.selector;
                    }
                })
                localStorage.setItem("car",JSON.stringify(state.car));
            },


        },
        getters:{
            zong:function(state){
                var c = 0;
                state.car.forEach(function(item){
                    c+=item.count;
                })
                return c
            },
            getcount:function(state){
                var c = {};
                state.car.forEach(function(item){
                    c[item.id] = item.count;
                })
                return c

            },
            getselecor:function(state){
                var c = {};
                state.car.forEach(function(item){
                    c[item.id] = item.selector;
                })
                return c
            },
            zongcount:function(state){

                var d = {count:0,price:0};
                state.car.forEach(function(item){
                    if(item.selector){
                        d.count+=parseInt(item.count);
                        d.price+=parseInt(item.count)*parseInt(item.price)
                    }

                })
                return d

            }
        }
})

new Vue({
        el:"#app",
        render:c=>c(login),
        router,
        store
})