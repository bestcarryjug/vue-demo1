<template>
   <div class="photo-list">
       <div id="slider" class="mui-slider">
           <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
               <div class="mui-scroll">
                   <a v-for="item in list" :key="item.id" :class="['mui-control-item',item.id==0?'mui-active':'']" @tap="getnavid(item.id)" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                      {{item.title}}
                   </a>
               </div>
           </div>
   </div>
       <ul>
           <router-link v-for="item in cate" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
               <img v-lazy="item.img_url">
               <div class="info">
                   <h1 class="info-title">{{ item.title }}</h1>
                   <div class="info-body">{{ item.zhaiyao }}</div>
               </div>
           </router-link>
       </ul>
</div>
</template>
<script>
    import mui from '../../lib/mui/js/mui.js'
    export default{
        data:function(){
            return {
              list:[],
                cate:[]
            }
        },
        created:function(){
            this.getnav()
            this.getnavid(0)
        },
        mounted:function(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getnav:function(){
                this.$http.get("api/getimgcategory").then(function(result){
                   if(result.body.status == 0){
                       this.list = result.body.message;
                       this.list.unshift({id:0,title:"全部"})
                   }else{
                       Toast("加载失败")
                   }
                })
            },
            getnavid:function(id){
                this.$http.get("api/getimages/"+id).then(function(result){
                    console.log(result.body)
                    if(result.body.status == 0){
                            this.cate = result.body.message
                    }else{
                        Toast("加载失败")
                    }
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    * { touch-action: pan-y; }

    .photo-list{
        ul{
            list-style: none;
            margin:0;
            padding: 10px;
            padding-bottom: 10px;
           li{
               text-align: center;
               box-shadow: 0 0 9px #ccc;
               background-color: #fff;
               position: relative;
               margin-bottom: 10px;
               img{
                   width: 100%;
                   vertical-align: middle;
               }
              img[lazy=loading] {
                  width: 40px;
                  height: 300px;
                  margin: auto;
              }
           }
           .info{
           position: absolute;
           text-align: left;
           max-height: 84px;
               color: white;
               bottom: 0;
               background-color: rgba(0, 0, 0, 0.4);
            .info-title {
                font-size: 14px;
            }
            .info-body {
                font-size: 13px;
            }
           }

        }
    }
</style>