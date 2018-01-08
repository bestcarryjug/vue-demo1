<template>
    <div class="goument">
        <div class="mui-card gist" v-for="item in list" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <myswitch v-model="$store.getters.getselecor[item.id]"
                            @change="change(item.id,$store.getters.getselecor[item.id])"></myswitch>
                    <img :src="item.thumb_path" alt=""/>
                    <div class="price">
                        <h3> {{item.title}}</h3>
                        <p><span class="newprice">￥{{item.sell_price}}</span><shopnum class="zzc" :id="item.id"></shopnum>
                            <a href="" @click.prevent="remove(item.id)">删除</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{$store.getters.zongcount["count"]}}</span> 件， 总价 <span class="red">￥{{$store.getters.zongcount["price"]}}</span></p>
                    </div>
                    <mybutton type="danger">去结算</mybutton>
                </div>
            </div>
        </div>


        <p></p>

    </div>
</template>

<script>
    import shopnum from '../comming/shopnumbox.vue'
    export default{
        data:function(){
            return {
                list:[]
            }
        },
        created:function(){
            this.getdata()

        },
        components:{
            'shopnum':shopnum
        },
        methods:{
            getdata:function(){
              var c = [];
                this.$store.state.car.forEach(function(item){
                    c.push(item.id)
                })
                if(c.length == 0){
                        return;
                }
                var s = c.join(",");
                this.$http.get("api/goods/getshopcarlist/"+s).then(function(result){
                        if(result.body.status == 0){
                                this.list = result.body.message;
                        }else{
                            console.log("gg")
                        }
                })
            },
            remove:function(id){
                console.log(this.list)
                if(this.list.length>=0) {
                   this.list.forEach((item,i)=>{
                        if(item.id==id){
                            this.list.splice(i,1)
                        }
                   })
                    this.$store.commit("remove", id)
                }

            },
        change:function(id,selector){
            var c = {id:id,selector:selector};
            this.$store.commit("change",c)
        }
        }


    }
</script>


<style lang="scss" scoped>
    .goument{
        background-color: #ccc;
        overflow: hidden;
        .gist{
            .mui-card-content-inner{
                display: flex;
                align-items: center;
                img{
                    width: 60px;
                }
                h3{
                    font-size: 13px;
                }
                .newprice{
                    color: red;
                    font-weight: bold;
                }
                .zzc{
                    margin: 0 5px;
                }



            }

        }
    .jiesuan {
        display: flex;
        justify-content: space-between;
        align-items: center;
    .red {
        color: red;
        font-weight: bold;
        font-size: 16px;
    }
    }
    }
</style>