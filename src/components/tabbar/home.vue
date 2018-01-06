<template>

    <div>
       <com :list="list" :istrue="istrue"></com>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newline">
                <img src="../../images/menu1.png" alt=""/>
                <div class="mui-media-body">新闻列表</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to ="/home/photo">
                <img src="../../images/menu2.png" alt=""/>
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shops">
                <img src="../../images/menu3.png" alt=""/>
                <div class="mui-media-body">商品购买</div></router-link></li>
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
    import com from '../shop/lbpicture.vue'
    export default{
        data:function(){
            return {
                list:[],
                istrue:true
            }
        },
        created:function(){
            this.getimg()
        },
        methods:{
            getimg:function(){
                this.$http.get('api/getlunbo').then(function(result){
                    console.log(result.body)
                    if(result.body.status == 0){
                        this.list = result.body.message;
                    }else{
                        Toast("加载失败");
                    }
                })
            }
        },
        components:{
            'com':com
        }
    }


</script>
<style lang="scss" scoped>

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