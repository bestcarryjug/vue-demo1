<template>

    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用 v-for 循环的话，一定要使用 key -->
            <mt-swipe-item v-for="item in list" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu1.png" alt=""/>
                <div class="mui-media-body">Home</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu2.png" alt=""/>
                <div class="mui-media-body">Email</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu3.png" alt=""/>
                <div class="mui-media-body">Chat</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt=""/>
                <div class="mui-media-body">location</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt=""/>
                <div class="mui-media-body">Search</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt=""/>
                <div class="mui-media-body">Phone</div></a></li>

        </ul>
    </div>


</template>

<script>
    export default{
        data:function(){
            return {
                list:[]
            }
        },
        created:function(){
            this.getimg()
        },
        methods:{
            getimg:function(){
                this.$http.get('http://vue.studyit.io/api/getlunbo').then(function(result){
                    console.log(result.body)
                    if(result.body.status == 0){
                        this.list = result.body.message;
                    }else{
                        Toast("加载轮播图失败……");
                    }
                })
            }
        }
    }


</script>
<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

    .mint-swipe-item {

    img {
        width: 100%;
        height: 100%;
    }
    }
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        margin-top: 22px;
    img {
        width: 50px;
        height: 50px;
    }

    .mui-media-body{
        font-size: 13px;
    }
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>