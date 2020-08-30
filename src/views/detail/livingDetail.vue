<template>
    <div class="living_detail_page">
       <div class="living_hook"></div>
        <tabs :list="tabList" :active="activeTab" @change="changeTab" class="whitebg"></tabs>
        <router-view></router-view>  
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            tabList: ['课程介绍','课程目录','课程推荐','评价（114）'],
            activeTab: 0,
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });
        this.$emit('tabbar', {
            show: false
        })
    },
    methods: {
       changeTab(index) {
            this.activeTab = index
        },
    },
    components: {Tabs}
}
</script>

<style lang="less" scoped>
.living_detail_page{
    .living_hook{
        height: 211px;  
        background: orange;
   }
}
   
</style>