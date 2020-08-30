<template>
    <div class="living_detail_page">
       livingDetailIntroduce.vue
    </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
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
    },
    components: {Tabs}
}
</script>

<style lang="less" scoped>
.living_detail_page{
    .living_hook{
        height: 211px;  
   }
}
   
</style>