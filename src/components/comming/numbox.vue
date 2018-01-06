<template>

    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="add" ref="num"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>


</template>
<script>
    import mui from "../../lib/mui/js/mui.min.js"
    export default{
        mounted:function(){
            mui(".mui-numbox").numbox();
        },
        props:["max"],
        methods:{
           add:function(){
               this.$emit("addcount",parseInt(this.$refs.num.value));
           }
        },
        watch:{
            "max":function(newval,oldval){
                mui(".mui-numbox").numbox().setOption("max",newval)
            }

        }


    }
</script>
<style>

</style>