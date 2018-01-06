<template>
    <div class="photo-content">
        <div class="son" v-for = "item in list" :key="id">
            <h3>{{item.title}}</h3>
            <p>
                <span>发表:{{item.add_time | forma}}</span>
                <span>点击:{{item.click}}</span>
            </p>
            <hr/>
            <div class="small">
                <img class="preview-img" v-for="(item, index) in cate"
                     :src="item.src" height="100" @click="$preview.open(index, cate)">
            </div>
            <div class="content" v-html="item.content"></div>
            <com :father="id"></com>
        </div>

    </div>
</template>
<script>
    import com from '../news/pinlun.vue'
    export default{
        data:function(){
            return{
                id:this.$route.params.id,
                list:[],
                cate:[]
            }
        },
        created:function(){
            this.getdata()
            this.getdata1()
        },
        methods:{
            getdata:function(){
                this.$http.get("api/getimageInfo/"+this.id).then(function(result){
                    console.log(result.body)
                    if(result.body.status == 0){
                            this.list = result.body.message;
                    }else{
                        Toast("加载失败")
                    }
                })
            },
            getdata1:function(){
                this.$http.get("api/getthumimages/" + this.id).then(function(result){
                    if(result.body.status == 0){
                        result.body.message.forEach(function(item){
                            item.w = 600;
                            item.h = 400;
                        })
                        this.cate = result.body.message;
                    }else{
                        Toast("加载失败")
                    }
                })
            },

        },
        components:{
            'com':com
        }



    }

</script>
<style lang="scss" scoped>
    .photo-content{
         padding: 0 4px;
         padding-top: 5px;
        .son{
            h3{
                font-size: 14px;
                color: #226aff;
                text-align: center;
            }
            p{
                display: flex;
                justify-content: space-between;

            }
        .content{
            font-size: 14px;
            text-indent: 2em;
            color: #666;
        }
        .small{
            img{
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
        }
    }

</style>