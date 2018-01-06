<template>
   <div class="zong-content">
       <div class="son" v-for="item in list" :key="item.id">
   <h3>{{item.title}}</h3>
   <p>
       <span>发表:{{item.add_time | forma}}</span>
      <span>点击:{{item.id}}</span>
   </p>
           <hr/>
     <div class="content" v-html="item.content">
     </div>
           <comsonent :father="id"></comsonent>
       </div>

   </div>
</template>
<script>
    import comment from "./pinlun.vue"
    export default{
        data:function(){
            return {
                id:this.$route.params.id,
                list:[]
            }
        },
        created:function(){
               this.getcontent();
        }
        ,
        methods:{
            getcontent:function(){
                 this.$http.get("api/getimageInfo/"+this.id).then(function(result){
                         if(result.body.status == 0){
                              this.list = result.body.message;
                         }else{
                             Toast("获取新闻列表失败！");
                         }
                 })
        }
        },
        components:{
            "comsonent":comment,
        }

    }
</script>
<style lang="scss">
   .zong-content{
       height: 100%;
       width: 100%;
       padding: 0 4px;
   .son{
   h3{
       font-size: 14px;
       text-align: center;
       color: red;
   }
   >p{
       display: flex;
       justify-content: space-between;
       span{
           color:#226aff;
       }
   }
   .content{
       img{
           width: 100%;
           height: 100%;
       }
   }
   }

   }

</style>