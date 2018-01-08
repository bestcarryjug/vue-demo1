<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' style="height: 25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" ref ="number" class="mui-input-numbox" type="number" :value="$store.getters.getcount[id]" @change="change"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>


</template>
<script>
    import mui from "../../lib/mui/js/mui.min.js"
    export default{
        mounted:function(){
            mui(".mui-numbox").numbox();
        },
        props:["id"],
        methods:{
            change:function(){
                var c = {id:this.id,count:this.$refs.number.value};
                this.$store.commit("shopadd",c)
            }
        }

    }
</script>
<style>

</style>