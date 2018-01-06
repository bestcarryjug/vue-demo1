<template>
    <div class="tuwen">
        <h3>{{data.title}}</h3>
        <hr/>
        <div class="content" v-html="data.content"></div>
    </div>
</template>
<script>
  export default{
      data:function(){
          return {
              data:""
          }
      },
      created:function(){
          this.getcontent()
      },
      methods:{
          getcontent:function(){
              this.$http.get("api/goods/getdesc/"+this.$route.params.id).then(function(result){
                    if(result.body.status == 0){
                        this.data = result.body.message[0]
                    }else{
                        Toast("加载失败")
                    }
              })
          }
      }
  }
</script>
<style lang="scss">
    .tuwen {
        padding: 4px;
    h3 {
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content{
    img{
        width: 100%;
    }
    }
    }
</style>