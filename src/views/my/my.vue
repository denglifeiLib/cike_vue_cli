<template>
    <div>
       我的
        
    </div>
</template>

<script>
import Icon from 'vue-svg-icon/Icon.vue';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            list: [],

            infiniteLoadData: {
                pullUpState: 0, // 1:上拉加载更多, 2:加载中……, 3:我是有底线的
            }
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: true,
            active: 3
        })

    },
    methods: {
       
    },
    components: {}
}
</script>

<style scoped>
    h1{
        text-align: center;
        font-size: 20px;
        line-height: 1;
    }
    p{
        line-height: 2;
        text-align: center;
        font-size: 30px;
    }
</style>