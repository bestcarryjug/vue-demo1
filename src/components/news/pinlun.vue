<template>
    <div class="z-son">
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="请输入要bb的内容" v-model="bb"></textarea>
        <mybutton type="primary" size="large" @click="fabiao">发表评论</mybutton>
        <div class="listp">
            <div class="slist" v-for="item in list" :key="item.artid">
            <div class="stop">
                <span>{{item.user_name}}</span>&nbsp;&nbsp; <span>{{item.add_time | forma}}</span>
            </div>
            <div class="sbottom">
                {{(item.content=="") ? "此用户是傻逼":(item.content== "undefined")?"此用户也是傻逼":item.content}}
            </div>
        </div>
        </div>
        <mybutton type="danger" size="large" plain @click="getgenduo">加载更多</mybutton>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {
               id:1,
                list:[],
                bb:""
            }
        },
        created:function(){
            this.getccc()
        },
        props:["father"],
        methods:{
            getccc:function(){
                this.$http.get("api/getcomments/"+this.father+"?pageindex="+this.id).then(function(result){
                    console.log(result)
                    if(result.body.status == 0){
                        this.list = this.list.concat(result.body.message);
                    }else{
                         console.log("gg")
                    }
                })
            },
            getgenduo:function(){
                this.id++;
                this.getccc()
            },
            fabiao:function(){
                var newy = {user_name:"匿名用户",add_time:new Date(),content:this.bb}
                this.list.unshift(newy);
                this.$http.post("api/postcomment/"+this.father,newy).then(function(result){
                    if(result.body.status == 0){
                        console.log("ok")
                    }else{
                        console.log("gg")
                    }
                })
                this.bb=""
            }
        }

    }
</script>
<style lang="scss" scoped>
  .z-son{
      h3{
        font-size: 16px;
        text-align: left;
        color: black;
      }
      textarea{
        margin-bottom: 3px;
          font-size: 12px;
          padding: 3px;
      }
  .listp{
  margin:3px 0px;

  .slist{
      font-size: 13px;
      line-height: 30px;
  .stop{
      background-color: #ccc;

  }
  }

  }

  }
</style>