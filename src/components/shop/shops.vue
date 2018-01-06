<template>
    <div>
       <div class="two-content">
           <div class="dis" v-for = "item in list" :key="item.id" @click="getneirong(item.id)">
               <img :src="item.img_url" alt=""/>
               <h1 class="title">{{item.title}}</h1>
               <div class="jjc">
               <p><span class="new">￥{{item.market_price}}</span><span class="old">￥{{item.sell_price}}</span></p>
               <p><span>热卖中</span><span>{{item.stock_quantity}}</span></p>
               </div>
           </div>
            <mybutton type="danger" size="large" @click="getmore">加载更多</mybutton>
       </div>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
                id:1,
                list:[]
            }
        },
        created:function(){
            this.getdata()
        },
        methods:{
            getdata:function(){
                this.$http.get("api/getgoods?pageindex="+this.id).then(function(result){
                        if(result.body.status == 0){
                            this.list = this.list.concat(result.body.message);
                        }else{
                            Toast("加载失败")
                        }
                })
            },
            getmore:function(){
                this.id++;
                this.getdata();
            },
            getneirong:function(id){
                this.$router.push({name:"pic",params:{id:id}})
            }
        }

    }
</script>
<style lang="scss" scoped>
    .two-content{
        padding:5px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .dis{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin-bottom: 5px;
            padding: 3px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            h1{
                font-size: 14px;
                line-height: 20px;
            }
            img{
                width: 100%;
            }
            .jjc{
                background-color: #eee;

            p{
                margin: 0;
            }
            p:nth-of-type(1){
                .new{
                    color: red;
                    font-size: 16px;
                    font-weight: bold;
                }
                .old{
                    margin-left: 15%;
                    text-decoration: line-through;
                }
            }
            p:nth-of-type(2){
                display: flex;
                justify-content: space-between;

            }
            }
        }
    }
</style>