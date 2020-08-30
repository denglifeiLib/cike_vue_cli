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
            // tabList: ['课程介绍','课程目录','课程推荐','评价（114）'],
            tabList: [
                {
                    label: '课程介绍',
                    value: 'ke_jieshao'
                }, {
                    label: '课程目录',
                    value: 'ke_mulv'
                }, {
                    label: '课程推荐',
                    value: 'ke_tuijian'
                }, {
                    label: '评价（114）',
                    value: 'pingjia'
                }, {
                    label: '直播介绍',
                    value: 'zhibo_jieshao'
                }, {
                    label: '直播推荐',
                    value: 'zhibo_tuijian'
                }
            ],
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
       changeTab(index, {value}) {
            this.activeTab = index;
            switch (value) {
                case 'ke_jieshao':
                    this.$router.replace('class');
                    break;
                case 'zhibo_jieshao':
                    this.$router.replace('class');
                    break;
                case 'ke_mulv':
                    this.$router.replace('menue');
                    break;
                case 'ke_tuijian':
                    this.$router.replace('introduce');
                    break;
                case 'zhibo_tuijian':
                    this.$router.replace('introduce');
                    break;
                case 'pingjia':
                    this.$router.replace('comment');
                    break;
            }
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