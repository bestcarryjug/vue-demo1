
<template>
 <div class="picture-more">
     <transition
             @before-enter="before"
             @enter="enter"
             @after-enter="after"

             >
     <div class="ball" v-show="flag" ref="bell"></div>
     </transition>
     <div class="mui-card">
         <div class="mui-card-content">
             <div class="mui-card-content-inner">
                 <com :list="list" :istrue="istrue"></com>
             </div>
         </div>
     </div>
     <div class="mui-card qiu1">

         <div class="mui-card-header">{{arr.title}}</div>
         <div class="mui-card-content">
             <div class="mui-card-content-inner">
               <p class="price"><span class="oldprice">市场价&nbsp;:&nbsp;{{arr.market_price}}</span>&nbsp;&nbsp;特惠价<span class="newprice">&nbsp;:&nbsp;{{arr.sell_price}}</span></p>
               <p>购买数量 <numbox @addcount="getcount" :max="arr.stock_quantity"></numbox></p>
                 <mybutton type="primary">立即购买</mybutton>
                 <mybutton type="danger" @click="add">加入购物车</mybutton>
             </div>
             </div>
     </div>
     <div class="mui-card">
         <div class="mui-card-header">商品参数</div>
         <div class="mui-card-content">
             <div class="mui-card-content-inner">
                 <p>
                     商品编号&nbsp;:&nbsp;{{arr.goods_no}}
                 </p>
                 <p>
                     库存情况&nbsp;:&nbsp;{{arr.stock_quantity}}
                 </p>
                 <p>
                     上架时间&nbsp;:&nbsp;{{arr.add_time | forma}}
                 </p>
             </div>
         </div>
         <div class="mui-card-footer">
             <mybutton type="primary" size="large" plain @click="gettuwen(id)">图文介绍</mybutton>
             <mybutton type="danger" size="large" plain @click="getpinlu(id)">商品评论</mybutton>
         </div>
     </div>

 </div>
</template>
<script>
    import com from '../shop/lbpicture.vue'
    import numbox from '../comming/numbox.vue'
  export default{
      data:function(){
          return {
              list:[],
              istrue:false,
              id:this.$route.params.id,
              arr:"",
              flag:false,
              count:1
          }
      },
      created:function(){
          this.getlb()
          this.getpictrue()
      },
      methods:{
         getlb:function(){
             this.$http.get("api/getthumimages/"+this.id).then(function(result){
                    if(result.body.status == 0){
                        result.body.message.forEach(function(item){
                            item.img = item.src
                        })
                        this.list = result.body.message
                    }else{
                        Toast("加载失败")
                    }
             })
         },
          getpictrue:function(){
              this.$http.get('api/goods/getinfo/'+this.id).then(function(result){
                  console.log(result.body)
                  if(result.body.status == 0){
                      this.arr = result.body.message[0]
                  }else{
                      Toast("加载失败")
                  }
              })
          },
          gettuwen:function(id){
              this.$router.push({name:'tuwen',parmas:{id:id}})
          },
          getpinlu:function(id){
              this.$router.push({name:'pinl',parmas:{id:id}})
          },
          before:function(el){
            el.style.transform = "translate(0,0)"

          },
          enter:function(el,done){
              el.offsetWidth;
              const neww = this.$refs.bell.getBoundingClientRect();
              const oldw = document.getElementById("gouwu").getBoundingClientRect();
              const x = oldw.left - neww.left;
              const y = oldw.top - neww.top;
              el.style.transform = `translate(${x}px,${y}px)`;
              el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
              done();
          },
          after:function(el){
                this.flag = !this.flag;
          },
          getcount:function(count){
                this.count = count;
         },
              add:function(){
                  this.flag = !this.flag;
                  var info = {
                      id: this.id,
                      count: this.count,
                      price: this.arr.sell_price,
                      selected: true
                  }
                  this.$store.commit("addcar",info)
          }

      },
      components:{
          'com':com,
          'numbox':numbox
      }
  }
</script>
<style lang="scss" scoped>
    .picture-more{
        background-color: #eee;
        overflow: hidden;
        .price{
            .oldprice{
                text-decoration: line-through;
            }
            .newprice{
                color: red;
                font-weight: bold;
            }
        }
    .mui-card-footer {
        display: block;
    button {
        margin: 15px 0;
    }
    }

        .ball{
            height: 15px;
            width: 15px;
            background-color: red;
            border-radius: 50%;
            position: absolute;
            z-index: 99;
            top: 390px;
            left: 146px;
        }


    }
</style>