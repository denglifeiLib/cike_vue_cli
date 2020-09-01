<template>
    <div class="my_favorite_detail_page_wrap">

       <div class="empty" v-if="!infos || infos.length==0">
            <img src="../../assets/images/kong_shoucang@2x.png" alt="">
            <span class="text_dis">还没有收藏内容</span>
            <button class="btn plain_grey" @click="$router.go(-1)">返回</button>
            <p class="text_dis delete_text">删除该收藏夹</p>
        </div>
    </div>
</template>

<script>
import * as Axios from '@/utils/Action';
import PopMonth from '@/components/PopMonth';
export default {
    name: 'test',
    data() {
        return {
        }
    },
    created() {
        this.$emit('showClasstip')
        this.$emit('tabbar', {show: false})
    },
    methods: {
       changeTime(time) {
           console.log(333, time)
        },
    },
    components: {}
}
</script>

<style lang="less" scoped>
.my_favorite_detail_page_wrap{
    padding: 8px 16px;

    .delete_text{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 16px;
        text-align: center;
    }
    
    .empty{
        height: calc(100vh - 40px);
        padding-bottom: 30%;
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
            background: transparent;
        }
    }

}


    
</style>