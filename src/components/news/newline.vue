<template>
    <div><ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
            <router-link :to="'/home/newline/'+item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{item.title}}</h1>
                    <p class='mui-ellipsis'><span>发表时间:{{item.add_time | forma}}</span><span>点击{{item.click}}</span></p>
                </div>
            </router-link>
        </li>
        </ul>


    </div>
</template>
<script>
    export default{
        data:function(){
            return{
                list:[]
            }
        },
        created:function(){
            this.getNewList()
        },
        methods:{
            getNewList:function(){
                this.$http.get("api/getnewslist").then(function(result){
                    if(result.body.status == 0){
                        this.list = result.body.message;
                    }else{
                        Toast("获取新闻列表失败！");
                    }
                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    .mui-table-view{
        h1{
            font-size: 16px;
        }
        p{
            display:flex;
            justify-content: space-between;
        }
    }
</style>