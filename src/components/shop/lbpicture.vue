<template>
<div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.img">
            <img :src="item.img" alt="" :class="{'full':istrue}">
        </mt-swipe-item>
    </mt-swipe>
</div>
</template>
<script>
   export default{
       props:["list",'istrue'],

   }
</script>
<style lang="scss" scoped>
    .mint-swipe {
        text-align: center;
        height: 200px;

    .mint-swipe-item {

    img {

        height: 100%;
    }
    }
    }
    .full{
        width: 100%;
    }
</style>