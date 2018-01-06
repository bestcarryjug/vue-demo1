<template>
   <div>
       <com :father="id"></com>
   </div>
</template>
<script>
    import com from "../news/pinlun.vue"
   export default{
       data:function(){
           return{
               id:this.$route.params.id
           }
       },
        components:{
            'com':com
        }
   }
</script>
<style>

</style>