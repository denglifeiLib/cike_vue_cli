<template>
    <div class="empty_page">
        <img src="../assets/images/kong_diushi@2x.png" alt="">
        <span class="text_dis">页面加载失败</span>
        <button class="btn plain_grey" @click="$router.go(-1)">刷新</button>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import Tabs from '@/components/Tabs';
export default {
    name: 'test',
    data() {
        return {}
    },
    created() {
        
        console.log(999, this.$route.query)
    },
    methods: {
       fresh(index) {
           
        },
    },
    components: {}
}
</script>

<style lang="less" scoped>
.empty_page{
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 95px;
        margin-bottom: 12px;
    }
    .btn{
        margin-top: 32px;
        background-color: transparent;
    }
}


    
</style>