<template>
    <mt-swipe :show-indicators="true" :auto="3000" class="swipe_box">
        <mt-swipe-item v-for="(item,i) in swipeList" :key="i">
            <img :src="item.img || item" alt="" class="img">
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {}
    },
    props: {
        swipeList: {
            type: Array,
            default() {
                return [require('../../../assets/images/default2.jpg')]
            }
        }
    },
    created() {},
    methods: {
       
    },
    components: {}
}
</script>

<style lang="less">
    .swipe_box{
        height: 130px;
        .img{
            display: block;
            height: 130px;
            margin: 0 auto;
            background: #D8D8D8;
            border-radius: 8px;
            border: 1px solid #F0F0F0;
        }
        .mint-swipe-indicators{
            left: auto;
            right: 10px;
        }
        .mint-swipe-indicator{
            width: 10px;
            height: 2px;
            background: #fff;
            border-radius: 1px;
            &.is-active{
                background: #fff;
                opacity: 1;
            }
        }
    }
    

</style>