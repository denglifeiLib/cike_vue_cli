<template>
    <div class="comment_succ_page flex_box">
        <img src="../../assets/images/pjcg@2x.png" alt="" class="suc_img">
        <p class="tt">评价成功</p>
        <div class="text_dis">感谢你对老师的支持</div>
        <button class="btn plain_white block">返回我的订单</button>
    </div>
</template>

<script>
import Star from '@/components/Star';
import * as Axios from '@/utils/Action';
export default {
    name: 'test',
    data() {
        return {
            classInfo: {
                teacher: '汪涛',
                header: require('../../assets/images/header.jpg'),
                studentHeader: require('../../assets/images/header.jpg'),
                time: '2020年8月1日 17:00-18:00',
                name: '罗昭诚',
                comment: '讲课非常好，非常清楚'
                
            },
            score: 4,
            comment: 'sfdf'
        }
    },
    created() {
        this.$emit('header', {
            show: true,
            title: '首页',
            back: '0'
        });

    },
    methods: {
       
    },
    components: {Star}
}
</script>

<style lang="less" scoped>
    .comment_succ_page{
        padding: 35%  39px 0;
        min-height: 100vh;
        background:linear-gradient(180deg,rgba(27,34,110,1) 0%,rgba(38,47,148,1) 100%);
        flex-direction: column;
        .suc_img{
            height: 115px;
        }
        .tt{
            padding: 32px 0 9px;
            font-size:20px;
            font-family:PingFangSC-Semibold,PingFang SC;
            font-weight:600;
            color:rgba(255,255,255,1);
        }
        .text_dis{
            font-size:15px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(182,186,233,1);
        }
        .btn{
            margin-top: 40px;
            // width:177px;
            height:50px;
            font-size: 16px;
        }
    }
</style>